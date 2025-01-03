import { PropType, defineComponent, shallowRef, onUnmounted } from 'vue'
import {
  ControlPosition,
  GlobeControl as MlGlobeControl,
} from 'maplibre-gl'
import { useContext } from '../../hooks/core'

export const GlobeControl = defineComponent({
  name: 'GlobeControl',
  props: { position: String as PropType<ControlPosition> },
  setup() {
    const globe = shallowRef<MlGlobeControl>(new MlGlobeControl())

    const { map } = useContext()
    map.value.addControl(globe.value, 'top-left')

    onUnmounted(() => {
      if (!globe.value) return
      map.value.removeControl(globe.value)
    })

    return () => {}
  },
})
