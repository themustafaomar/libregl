import { defineComponent } from 'vue'
import { CircleLayerSpecification, GeoJSONSourceSpecification } from 'maplibre-gl'
import { useLayerExposes, useLayer, layerEvents } from '../../hooks/core'
import { props } from '../../shared/layer-props'

const TYPE = 'circle'
const UID_PREFIX = `${TYPE}-layer`

export const CircleLayer = defineComponent({
  name: 'CircleLayer',
  emits: Object.assign(layerEvents, []),
  props: props<CircleLayerSpecification, GeoJSONSourceSpecification>(UID_PREFIX),
  setup(props, { expose }) {
    const { map, layer } = useLayer<CircleLayerSpecification>(TYPE, props)

    expose(useLayerExposes(map, props.id, layer))

    return () => {}
  },
})
