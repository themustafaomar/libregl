import {
  defineComponent,
  onUnmounted,
  PropType,
  provide,
  shallowRef,
  watch,
} from 'vue'
import { type VideoSource as VideoSourceInstance } from 'maplibre-gl'
import { sourceKey } from '../../types'
import { useContext } from '../../hooks/core'
import { removeSource, id } from '../../util'

const UID_PREFIX = 'video-source'

export const VideoSource = defineComponent({
  name: 'VideoSource',
  props: {
    id: id(UID_PREFIX),
    coordinates: {
      type: null as unknown as PropType<
        [[number, number], [number, number], [number, number], [number, number]]
      >,
      required: true,
    },
    urls: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const { id, ...options } = props
    const { map, isLoaded } = useContext()
    const source = shallowRef<VideoSourceInstance>()

    watch(isLoaded, (isLoaded) => {
      if (!isLoaded) return
      source.value = map.value
        .addSource(id, { type: 'video', ...options })
        .getSource(id)
    })

    onUnmounted(() => {
      removeSource(map, id)
    })
    provide(sourceKey, props.id)

    return () => isLoaded.value && slots.default!()
  },
})
