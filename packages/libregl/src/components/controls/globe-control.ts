import { type PropType, defineComponent, shallowRef, onUnmounted } from 'vue'
import {
  GlobeControl as MlGlobeControl,
  ControlPosition,
} from 'maplibre-gl'
import { useContext } from '../../hooks/core'

export const GlobeControl = defineComponent({
  name: 'GlobeControl',
  props: { position: String as PropType<ControlPosition> },
  setup(props) {
    const globe = shallowRef<MlGlobeControl>(new MlGlobeControl())

    const { map } = useContext()
    map.value.addControl(globe.value, props.position)

    onUnmounted(() => {
      if (!globe.value) return
      map.value.removeControl(globe.value)
    })

    return () => {}
  },
})
