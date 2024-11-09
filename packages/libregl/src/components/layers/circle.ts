import { defineComponent, onUnmounted } from 'vue'
import { CircleLayerSpecification, GeoJSONSourceSpecification } from 'maplibre-gl'
import { useContext, useLayerExposes, useSource } from '../../hooks/core'
import { props } from '../../shared/layer-props'
import { normalizeOptions, removeLayer } from '../../util'

const TYPE = 'circle'
const UID_PREFIX = `${TYPE}-layer`

export const CircleLayer = defineComponent({
  name: 'CircleLayer',
  props: props<CircleLayerSpecification, GeoJSONSourceSpecification>(UID_PREFIX),
  setup(props, { expose }) {
    const { source, sourceLayer, beforeId, ...options } = props
    const newSource = useSource(source)
    const { map, onLoaded } = useContext()
    onLoaded(() =>
      map.value.addLayer(
        {
          type: TYPE,
          source: newSource,
          'source-layer': sourceLayer,
          ...normalizeOptions(options),
        } as CircleLayerSpecification,
        beforeId
      )
    )

    onUnmounted(() => removeLayer(map, props.id))
    expose(useLayerExposes(map, props.id))
  },
  render: () => null,
})
