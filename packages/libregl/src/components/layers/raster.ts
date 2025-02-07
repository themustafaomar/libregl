import { defineComponent } from 'vue'
import { RasterLayerSpecification, RasterSourceSpecification, VideoSourceSpecification } from 'maplibre-gl'
import { useLayer, layerEvents, useLayerExposes } from '../../hooks/core'
import { props } from '../../shared/layer-props'

const TYPE = 'raster'
const UID_PREFIX = 'raster-layer'

export const RasterLayer = defineComponent({
  name: 'RasterLayer',
  emits: Object.assign(layerEvents, []),
  props: props<RasterLayerSpecification, RasterSourceSpecification | VideoSourceSpecification>(UID_PREFIX),
  setup(props, { expose }) {
    const { map, layer } = useLayer<RasterLayerSpecification>(TYPE, props)

    expose(useLayerExposes(map, layer))

    return () => {}
  },
})
