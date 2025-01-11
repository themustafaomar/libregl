import { type PropType, defineComponent, shallowRef, onUnmounted } from 'vue'
import {
  NavigationControl as MlNavigationControl,
  ControlPosition,
} from 'maplibre-gl'
import { useContext } from '../../hooks/core'
import { normalizeOptions } from '../../util'

export const NavigationControl = defineComponent({
  name: 'NavigationControl',
  props: {
    position: String as PropType<ControlPosition>,
    showCompass: { type: Boolean, default: undefined },
    showZoom: { type: Boolean, default: undefined },
    visualizePitch: { type: Boolean, default: undefined },
  },
  setup(props) {
    const { position, ...options } = props
    const navigation = shallowRef<MlNavigationControl>(
      new MlNavigationControl(normalizeOptions(options))
    )

    const { map } = useContext()
    map.value.addControl(navigation.value, position)

    onUnmounted(() => {
      if (!navigation.value) return
      map.value.removeControl(navigation.value)
    })

    return () => {}
  },
})
