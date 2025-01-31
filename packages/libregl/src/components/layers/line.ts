import { defineComponent } from 'vue'
import {
  GeoJSONSourceSpecification,
  LineLayerSpecification,
} from 'maplibre-gl'
import { useLayer, layerEvents, useLayerExposes } from '../../hooks/core'
import { props } from '../../shared/layer-props'

const TYPE = 'line'
const UID_PREFIX = `${TYPE}-layer`

export const LineLayer = defineComponent({
  name: 'LineLayer',
  emits: Object.assign(layerEvents, []),
  props: props<LineLayerSpecification, GeoJSONSourceSpecification>(UID_PREFIX),
  setup(props, { expose }) {
    const { map, layer } = useLayer<LineLayerSpecification>(TYPE, props)

    expose(useLayerExposes(map, props.id, layer))

    return () => {}
  },
})
