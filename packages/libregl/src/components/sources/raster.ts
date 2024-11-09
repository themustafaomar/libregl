import {
  defineComponent,
  onUnmounted,
  PropType,
  provide,
  shallowRef,
  watch,
} from 'vue'
import { RasterTileSource } from 'maplibre-gl'
import { sourceKey } from '../../types'
import { useContext } from '../../hooks/core'
import { id, normalizeOptions, removeSource } from '../../util'

const UID_PREFIX = 'raster-source'

export const RasterSource = defineComponent({
  name: 'RasterSource',
  props: {
    id: id(UID_PREFIX),
    url: String,
    tiles: Array as PropType<Array<string>>,
    bounds: null as unknown as PropType<[number, number, number, number]>,
    minzoom: Number,
    maxzoom: Number,
    tileSize: Number,
    scheme: String as PropType<'xyz' | 'tms'>,
    attribution: String,
    volatile: Boolean,
  },
  setup(props, { slots, expose }) {
    const { map, isLoaded } = useContext()
    const { id, ...options } = props
    const source = shallowRef<RasterTileSource>()

    watch([isLoaded], ([isLoaded]) => {
      if (!isLoaded) return
      source.value = map.value
        .addSource(id, { type: 'raster', ...normalizeOptions(options) })
        .getSource(id)
    })

    watch(() => props.url, (url) => url && source.value?.setUrl(url))
    watch(() => props.tiles, (tiles) => tiles && source.value?.setTiles(tiles))

    onUnmounted(() => {
      removeSource(map, id)
    })
    provide(sourceKey, props.id)
    expose({ source })

    return () => isLoaded.value && slots.default?.()
  },
})
