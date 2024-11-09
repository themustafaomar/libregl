import { defineComponent, shallowRef, onUnmounted, PropType } from 'vue'
import { ControlPosition, LogoControl as MlLogoControl } from 'maplibre-gl'
import { useContext } from '../../hooks/core'
import { normalizeOptions } from '../../util'

export const LogoControl = defineComponent({
  name: 'LogoControl',
  props: {
    position: String as PropType<ControlPosition>,
    compact: Boolean,
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
