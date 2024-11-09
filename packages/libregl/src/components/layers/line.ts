import { defineComponent, onUnmounted } from 'vue'
import { GeoJSONSourceSpecification, LineLayerSpecification } from 'maplibre-gl'
import { useSource, useContext, useLayerExposes } from '../../hooks/core'
import { removeLayer } from '../../util/remove-layer'
import { props } from '../../shared/layer-props'
import { normalizeOptions } from '../../util'

const TYPE = 'line'
const UID_PREFIX = `${TYPE}-layer`

export const LineLayer = defineComponent({
  name: 'LineLayer',
  props: props<LineLayerSpecification, GeoJSONSourceSpecification>(UID_PREFIX),
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
        } as LineLayerSpecification,
        beforeId
      )
    )

    onUnmounted(() => removeLayer(map, props.id))
    expose(useLayerExposes(map, props.id))
  },
  render: () => null,
})
