import { defineComponent, shallowRef, onUnmounted, PropType } from 'vue'
import { ControlPosition, ScaleControl as MlScaleControl, Unit } from 'maplibre-gl'
import { useContext } from '../../hooks/core'
import { normalizeOptions } from '../../util'

export const ScaleControl = defineComponent({
  name: 'ScaleControl',
  props: {
    position: String as PropType<ControlPosition>,
    maxWidth: Number,
    unit: String as PropType<Unit>,
  },
  setup(props, { expose }) {
    const { position, ...options } = props
    const scale = shallowRef<MlScaleControl>(
      new MlScaleControl(normalizeOptions(options))
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
