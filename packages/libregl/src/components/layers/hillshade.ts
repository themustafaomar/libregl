import { defineComponent } from 'vue'
import {
  HillshadeLayerSpecification,
  RasterDEMSourceSpecification,
} from 'maplibre-gl'
import { useLayer, layerEvents, useLayerExposes } from '../../hooks/core'
import { props } from '../../shared/layer-props'

const TYPE = 'hillshade'
const UID_PREFIX = `${TYPE}-layer`

export const HillshadeLayer = defineComponent({
  name: 'HillshadeLayer',
  emits: Object.assign(layerEvents, []),
  props: props<HillshadeLayerSpecification, RasterDEMSourceSpecification>(UID_PREFIX),
  setup(props, { expose }) {
    const { map, layer } = useLayer<HillshadeLayerSpecification>(TYPE, props)

    expose(useLayerExposes(map, props.id, layer))

    return () => {}
  },
})
