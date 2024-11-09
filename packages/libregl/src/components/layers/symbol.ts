import { defineComponent, onUnmounted } from 'vue'
import {
  GeoJSONSourceSpecification,
  SymbolLayerSpecification,
} from 'maplibre-gl'
import { useContext, useLayerExposes, useSource } from '../../hooks/core'
import { normalizeOptions, removeLayer } from '../../util'
import { props } from '../../shared/layer-props'

const TYPE = 'symbol'
const UID_PREFIX = `${TYPE}-layer`

export const SymbolLayer = defineComponent({
  name: 'SymbolLayer',
  props: props<SymbolLayerSpecification, GeoJSONSourceSpecification>(
    UID_PREFIX
  ),
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
        } as SymbolLayerSpecification,
        beforeId
      )
    )

    onUnmounted(() => removeLayer(map, props.id))
    expose(useLayerExposes(map, props.id))
  },
  render: () => null,
})
