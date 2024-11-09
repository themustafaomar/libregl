import { defineComponent, onUnmounted, shallowRef } from 'vue'
import {
  HillshadeLayerSpecification,
  RasterDEMSourceSpecification,
  Evented,
} from 'maplibre-gl'
import { useContext, useSource, useLayerExposes } from '../../hooks/core'
import { props } from '../../shared/layer-props'
import { normalizeOptions, removeLayer } from '../../util'

const TYPE = 'hillshade'
const UID_PREFIX = `${TYPE}-layer`

export const HillshadeLayer = defineComponent({
  name: 'HillshadeLayer',
  props: props<HillshadeLayerSpecification, RasterDEMSourceSpecification>(
    UID_PREFIX
  ),
  setup(props, { expose }) {
    const { source, sourceLayer, beforeId, ...options } = props
    const newSource = useSource(source)
    const { map, onLoaded } = useContext()
    const layer = shallowRef<Evented>()
    onLoaded(() => {
      if (map.value.getLayer(props.id)) return
      layer.value = map.value
        .addLayer(
          {
            type: TYPE,
            source: newSource,
            'source-layer': sourceLayer,
            ...normalizeOptions(options),
          } as HillshadeLayerSpecification,
          beforeId
        )
        .getLayer(props.id)
    })

    onUnmounted(() => removeLayer(map, props.id, newSource))
    expose(useLayerExposes(map, props.id))
  },
  render: () => null,
})
