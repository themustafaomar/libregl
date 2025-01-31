import { defineComponent } from 'vue'
import {
  GeoJSONSourceSpecification,
  HeatmapLayerSpecification,
} from 'maplibre-gl'
import { useLayer, layerEvents, useLayerExposes } from '../../hooks/core'
import { props } from '../../shared/layer-props'

const TYPE = 'heatmap'
const UID_PREFIX = `${TYPE}-layer`

export const HeatmapLayer = defineComponent({
  name: 'HeatmapLayer',
  emits: Object.assign(layerEvents, []),
  props: props<HeatmapLayerSpecification, GeoJSONSourceSpecification>(UID_PREFIX),
  setup(props, { expose }) {
    const { map, layer } = useLayer<HeatmapLayerSpecification>(TYPE, props)

    expose(useLayerExposes(map, props.id, layer))

    return () => {}
  },
})
