import { type PropType, defineComponent, shallowRef, onUnmounted } from 'vue'
import {
  FullscreenControl as MlFullscreenControl,
  ControlPosition,
} from 'maplibre-gl'
import { useContext } from '../../hooks/core'

export const FullscreenControl = defineComponent({
  name: 'FullscreenControl',
  props: {
    position: String as PropType<ControlPosition>,
    container: String,
    pseudo: { type: Boolean, default: undefined },
  },
  setup(props) {
    const fullscreen = shallowRef<MlFullscreenControl>(
      new MlFullscreenControl({
        container: props.container
          ? document.getElementById(props.container) || undefined
          : undefined,
          pseudo: props.pseudo !== undefined ? props.pseudo : false,
      })
    )

    const { map } = useContext()
    map.value.addControl(fullscreen.value, props.position)

    onUnmounted(() => {
      if (!fullscreen.value) return
      map.value.removeControl(fullscreen.value)
    })

    return () => {}
  },
})
