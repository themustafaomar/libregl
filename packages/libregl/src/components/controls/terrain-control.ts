import { type PropType, defineComponent, shallowRef, onUnmounted } from 'vue'
import {
  TerrainControl as MlTerrainControl,
  ControlPosition,
} from 'maplibre-gl'
import { useContext } from '../../hooks/core'
import { normalizeOptions } from '../../util'

export const TerrainControl = defineComponent({
  name: 'TerrainControl',
  props: {
    position: String as PropType<ControlPosition>,
    source: { type: String, required: true },
    exaggeration: Number,
  },
  setup(props, { expose }) {
    const { position, ...options } = props
    const terrain = shallowRef<MlTerrainControl>(
      new MlTerrainControl(normalizeOptions(options) as typeof options)
    )

    const { map } = useContext()
    map.value.addControl(terrain.value, position)

    onUnmounted(() => {
      if (!terrain.value) return
      map.value.removeControl(terrain.value)
    })
    expose({ terrain })

    return () => {}
  },
})
