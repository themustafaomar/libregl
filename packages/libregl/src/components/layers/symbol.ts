import { defineComponent } from 'vue'
import {
  GeoJSONSourceSpecification,
  SymbolLayerSpecification,
} from 'maplibre-gl'
import { useLayer, layerEvents, useLayerExposes } from '../../hooks/core'
import { props } from '../../shared/layer-props'

const TYPE = 'symbol'
const UID_PREFIX = `${TYPE}-layer`

export const SymbolLayer = defineComponent({
  name: 'SymbolLayer',
  emits: Object.assign(layerEvents, []),
  props: props<SymbolLayerSpecification, GeoJSONSourceSpecification>(UID_PREFIX),
  setup(props, { expose }) {
    const { map, layer } = useLayer<SymbolLayerSpecification>(TYPE, props)

    expose(useLayerExposes(map, props.id, layer))

    return () => {}
  },
})
