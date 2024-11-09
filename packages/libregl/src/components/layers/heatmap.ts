import { defineComponent, onUnmounted } from 'vue'
import {
  GeoJSONSourceSpecification,
  HeatmapLayerSpecification,
} from 'maplibre-gl'
import { useContext, useLayerExposes, useSource } from '../../hooks/core'
import { props } from '../../shared/layer-props'
import { normalizeOptions, removeLayer } from '../../util'

const TYPE = 'heatmap'
const UID_PREFIX = `${TYPE}-layer`

export const HeatmapLayer = defineComponent({
  name: 'HeatmapLayer',
  props: props<HeatmapLayerSpecification, GeoJSONSourceSpecification>(
    UID_PREFIX
  ),
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
        } as HeatmapLayerSpecification,
        beforeId
      )
    )

    onUnmounted(() => removeLayer(map, props.id))
    expose(useLayerExposes(map, props.id))
  },
  render: () => null,
})
