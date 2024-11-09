import { PropType } from 'vue'
import { FilterSpecification, LayerSpecification } from 'maplibre-gl'
import { id } from '../util'

export const props = <TLayerSpecification extends LayerSpecification, Source>(
  prefix: string
) => ({
  id: id(prefix),
  source: [Object, String] as PropType<Source>,
  metadata: Object as PropType<TLayerSpecification['metadata']>,
  sourceLayer: { type: String, default: '' },
  minzoom: Number,
  maxzoom: Number,
  filter: {
    type: [Array, Boolean] as PropType<FilterSpecification>,
    default: undefined,
  },
  paint: Object as PropType<TLayerSpecification['paint']>,
  layout: Object as PropType<TLayerSpecification['layout']>,
  beforeId: String,
})
