import { type PropType, defineComponent, shallowRef, onUnmounted } from 'vue'
import { LogoControl as MlLogoControl, ControlPosition } from 'maplibre-gl'
import { useContext } from '../../hooks/core'
import { normalizeOptions } from '../../util'

export const LogoControl = defineComponent({
  name: 'LogoControl',
  props: {
    position: String as PropType<ControlPosition>,
    compact: { type: Boolean, default: undefined },
  },
  setup(props, { expose }) {
    const { position, ...options } = props
    const scale = shallowRef<MlLogoControl>(
      new MlLogoControl(normalizeOptions(options))
    )

    const { map } = useContext()
    map.value.addControl(scale.value, position)

    onUnmounted(() => {
      if (!scale.value) return
      map.value.removeControl(scale.value)
    })
    expose({ scale })

    return () => {}
  },
})
