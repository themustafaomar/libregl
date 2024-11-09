import { defineComponent, onUnmounted } from 'vue'
import {
  FillExtrusionLayerSpecification,
  GeoJSONSourceSpecification,
} from 'maplibre-gl'
import { useContext, useLayerExposes, useSource } from '../../hooks/core'
import { props } from '../../shared/layer-props'
import { normalizeOptions, removeLayer } from '../../util'

const TYPE = 'fill-extrusion'
const UID_PREFIX = `${TYPE}-layer`

export const FillExtrusionLayer = defineComponent({
  name: 'FillExtrusionLayer',
  props: {
    ...props<FillExtrusionLayerSpecification, GeoJSONSourceSpecification | string>(UID_PREFIX),
  },
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
        } as FillExtrusionLayerSpecification,
        beforeId
      )
    )

    onUnmounted(() => removeLayer(map, props.id))
    expose(useLayerExposes(map, props.id))
  },
  render: () => null,
})
