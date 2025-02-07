import { defineComponent } from 'vue'
import {
  FillExtrusionLayerSpecification,
  GeoJSONSourceSpecification,
} from 'maplibre-gl'
import { useLayer, layerEvents, useLayerExposes } from '../../hooks/core'
import { props } from '../../shared/layer-props'

const TYPE = 'fill-extrusion'
const UID_PREFIX = `${TYPE}-layer`

export const FillExtrusionLayer = defineComponent({
  name: 'FillExtrusionLayer',
  emits: Object.assign(layerEvents, []),
  props: props<FillExtrusionLayerSpecification, GeoJSONSourceSpecification | string>(UID_PREFIX),
  setup(props, { expose }) {
    const { map, layer } = useLayer<FillExtrusionLayerSpecification>(TYPE, props)

    expose(useLayerExposes(map, layer))

    return () => {}
  },
})
