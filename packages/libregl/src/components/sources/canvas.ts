import {
  defineComponent,
  onUnmounted,
  PropType,
  provide,
  shallowRef,
  watch,
} from 'vue'
import {
  CanvasSource as CanvasSourceInstance,
  CanvasSourceSpecification,
} from 'maplibre-gl'
import { sourceKey } from '../../types'
import { useContext } from '../../hooks/core'
import { removeSource, normalizeOptions, id } from '../../util'

const UID_PREFIX = 'canvas-source'

export const CanvasSource = defineComponent({
  name: 'CanvasSource',
  props: {
    id: id(UID_PREFIX),
    coordinates: null as unknown as PropType<
      [[number, number], [number, number], [number, number], [number, number]]
    >,
    animate: {
      type: Boolean,
      default: undefined,
    },
    canvas: [String, Object] as PropType<string | HTMLCanvasElement>,
  },
  setup(props, { slots, expose }) {
    const { id, ...options } = props
    const { map, isLoaded } = useContext()
    const source = shallowRef<CanvasSourceInstance>()

    watch(isLoaded, (value) => {
      if (!value) return
      source.value = map.value
        .addSource(id, {
          type: 'canvas',
          ...normalizeOptions(options),
        } as CanvasSourceSpecification)
        .getSource(id)
    })

    onUnmounted(() => {
      removeSource(map, id)
    })
    provide(sourceKey, props.id)
    expose({ source })

    return () => slots.default?.()
  },
})
