import GeoJSON from 'geojson'
import {
  defineComponent,
  onUnmounted,
  PropType,
  provide,
  shallowRef,
  watch,
} from 'vue'
import {
  type FilterSpecification,
  type GeoJSONSource,
  type PromoteIdSpecification,
} from 'maplibre-gl'
import { sourceKey } from '../../types'
import { useContext } from '../../hooks/core'
import { id, removeSource, normalizeOptions } from '../../util'

const UID_PREFIX = 'geojson-source'

export const GeojsonSource = defineComponent({
  name: 'GeojsonSource',
  props: {
    id: id(UID_PREFIX),
    data: [Object, String] as PropType<GeoJSON.GeoJSON | string>,
    maxzoom: Number,
    attribution: String,
    buffer: Number,
    filter: null as unknown as PropType<FilterSpecification>,
    tolerance: Number,
    cluster: Boolean,
    clusterRadius: Number,
    clusterMaxZoom: Number,
    clusterMinPoints: Number,
    clusterProperties: Object as unknown as null,
    lineMetrics: Boolean,
    generateId: Boolean,
    promoteId: Object as PropType<PromoteIdSpecification>,
  },
  setup(props, { slots, expose }) {
    const { id, data, ...options } = props
    const { map, isLoaded } = useContext()
    const source = shallowRef<GeoJSONSource>()

    watch([isLoaded, () => props.data], ([isLoaded, data]) => {
      if (!isLoaded || !data) return
      if (source.value) return setData(props.data!)
      source.value = map.value
        .addSource(id, {
          type: 'geojson',
          data,
          ...normalizeOptions(options),
        })
        .getSource(id)
    })

    const setData = (data: string | GeoJSON.GeoJSON) => {
      source.value!.setData(data)
    }

    onUnmounted(() => removeSource(map, id))
    provide(sourceKey, props.id)
    expose({ source, setData })

    return () => props.data && isLoaded.value && slots.default!()
  },
})
