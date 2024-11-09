import { defineComponent, onUnmounted } from 'vue'
import { FillLayerSpecification, GeoJSONSourceSpecification } from 'maplibre-gl'
import { useContext, useLayerExposes, useSource } from '../../hooks/core'
import { removeLayer } from '../../util/remove-layer'
import { props } from '../../shared/layer-props'
import { normalizeOptions } from '../../util'

const TYPE = 'fill'
const UID_PREFIX = `${TYPE}-layer`

export const FillLayer = defineComponent({
  name: 'FillLayer',
  props: {
    ...props<FillLayerSpecification, GeoJSONSourceSpecification>(UID_PREFIX),
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
        } as FillLayerSpecification,
        beforeId
      )
    )

    onUnmounted(() => removeLayer(map, props.id))
    expose(useLayerExposes(map, props.id))
  },
  render: () => null,
})
