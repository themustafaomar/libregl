import { defineComponent, shallowRef, onUnmounted, PropType } from 'vue'
import {
  AttributionControl as MlAttributionControl,
  ControlPosition,
} from 'maplibre-gl'
import { useContext } from '../../hooks/core'
import { normalizeOptions } from '../../util'

export const AttributionControl = defineComponent({
  name: 'AttributionControl',
  props: {
    position: String as PropType<ControlPosition>,
    compact: { type: Boolean, default: true },
    customAttribution: [String, Array] as PropType<string | Array<string>>,
  },
  setup(props) {
    const { map } = useContext()
    const { position, ...options } = props

    const attribution = shallowRef<MlAttributionControl>(
      new MlAttributionControl(normalizeOptions(options))
    )
    map.value.addControl(attribution.value, position)

    onUnmounted(() => {
      if (!attribution.value) return
      map.value.removeControl(attribution.value)
    })

    return () => {}
  },
})
