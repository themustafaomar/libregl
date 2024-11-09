import {
  defineComponent,
  onUnmounted,
  PropType,
  provide,
  shallowRef,
  watch,
} from 'vue'
import { PromoteIdSpecification, VectorTileSource } from 'maplibre-gl'
import { sourceKey } from '../../types'
import { useContext } from '../../hooks/core'
import { id, removeSource, normalizeOptions } from '../../util'

const UID_PREFIX = 'geojson-source'

export const VectorSource = defineComponent({
  name: 'VectorSource',
  props: {
    id: id(UID_PREFIX),
    url: String,
    tiles: Array as PropType<string[]>,
    bounds: null as unknown as PropType<[number, number, number, number]>,
    scheme: String as PropType<'xyz' | 'tms'>,
    minzoom: Number,
    maxzoom: Number,
    attribution: String,
    promoteId: Object as PropType<PromoteIdSpecification>,
    volatile: Boolean,
  },
  setup(props, { slots, expose }) {
    const { id, ...options } = props
    const { map, isLoaded } = useContext()
    const source = shallowRef<VectorTileSource>()
    const newOptions = normalizeOptions(options)

    watch(isLoaded, (isLoaded) => {
      if (!isLoaded) return
      source.value = map.value
        .addSource(id, { type: 'vector', ...newOptions })
        .getSource(id)
    })

    onUnmounted(() => {
      removeSource(map, id)
    })
    provide(sourceKey, props.id)
    expose({ source })

    return () => isLoaded.value && slots.default!()
  },
})
