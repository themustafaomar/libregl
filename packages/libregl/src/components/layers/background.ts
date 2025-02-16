import { defineComponent, onUnmounted, PropType, shallowRef } from 'vue'
import { BackgroundLayerSpecification } from 'maplibre-gl'
import { useContext, useLayerExposes } from '../../hooks/core'
import { id, normalizeOptions, removeLayer } from '../../util'

const TYPE = 'background'
const UID_PREFIX = `${TYPE}-layer`

export const BackgroundLayer = defineComponent({
  name: 'BackgroundLayer',
  props: {
    id: id(UID_PREFIX),
    metadata: Object as PropType<BackgroundLayerSpecification['metadata']>,
    minzoom: Number,
    maxzoom: Number,
    layout: Object as PropType<BackgroundLayerSpecification['layout']>,
    paint: Object as PropType<BackgroundLayerSpecification['paint']>,
  },
  setup(props, { expose }) {
    const { ...options } = props
    const { map, onLoaded } = useContext()
    const layer = shallowRef()
    onLoaded(
      () =>
        (layer.value = map.value
          .addLayer({
            type: TYPE,
            ...normalizeOptions(options),
          } as BackgroundLayerSpecification)
          .getLayer(props.id))
    )

    onUnmounted(() => removeLayer(map, props.id))
    expose(useLayerExposes(map, layer))

    return () => {}
  },
})
