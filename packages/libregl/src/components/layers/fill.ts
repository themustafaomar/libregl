import { defineComponent } from 'vue'
import { FillLayerSpecification, GeoJSONSourceSpecification } from 'maplibre-gl'
import { layerEvents, useLayer, useLayerExposes } from '../../hooks/core'
import { props } from '../../shared/layer-props'

const TYPE = 'fill'
const UID_PREFIX = `${TYPE}-layer`

export const FillLayer = defineComponent({
  name: 'FillLayer',
  emits: Object.assign(layerEvents, []),
  props: props<FillLayerSpecification, GeoJSONSourceSpecification>(UID_PREFIX),
  setup(props, { expose }) {
    const { map, layer } = useLayer<FillLayerSpecification>(TYPE, props)

    expose(useLayerExposes(map, props.id, layer))

    return () => {}
  },
})
