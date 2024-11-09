import { defineComponent, onUnmounted, PropType, provide, shallowRef, watch, watchEffect } from 'vue'
import { RasterDEMTileSource } from 'maplibre-gl'
import { sourceKey } from '../../types'
import { useContext } from '../../hooks/core'
import { id, normalizeOptions, removeSource } from '../../util'

const UID_PREFIX = 'raster-dem-source'

export const RasterDemSource = defineComponent({
  name: 'RasterDemSource',
  props: {
    id: id(UID_PREFIX),
    url: String,
    tiles: Array as PropType<string[]>,
    bounds: null as unknown as PropType<[number, number, number, number]>,
    minzoom: Number,
    maxzoom: Number,
    tileSize: Number,
    attribution: String,
    encoding: String as PropType<'terrarium' | 'mapbox' | 'custom'>,
    redFactor: Number,
    blueFactor: Number,
    greenFactor: Number,
    baseShift: Number,
    volatile: Boolean,
  },
  setup(props, { slots, expose }) {
    const { map, isLoaded } = useContext()
    const { id, ...options } = props
    const source = shallowRef<RasterDEMTileSource>()

    watchEffect(() => {
      if (!isLoaded.value) return
      source.value = map.value
        .addSource(id, { type: 'raster-dem', ...normalizeOptions(options) })
        .getSource(id)
    })

    watch(() => props.url, (url) => url && source.value?.setUrl(url))
    watch(() => props.tiles, (tiles) => tiles && source.value?.setTiles(tiles))

    onUnmounted(() => {
      removeSource(map, props.id)
    })
    provide(sourceKey, props.id)
    expose({ source })

    return () => isLoaded.value ? slots.default?.() : undefined
  },
})
