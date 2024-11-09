import {
  defineComponent,
  onUnmounted,
  PropType,
  provide,
  shallowRef,
  watch,
} from 'vue'
import { ImageSource as ImageSourceType } from 'maplibre-gl'
import { sourceKey } from '../../types'
import { useContext } from '../../hooks/core'
import { id, removeSource } from '../../util'

const UID_PREFIX = 'geojson-source'

export const ImageSource = defineComponent({
  name: 'ImageSource',
  props: {
    id: id(UID_PREFIX),
    url: {
      type: String,
      required: true,
    },
    coordinates: {
      type: null as unknown as PropType<
        [[number, number], [number, number], [number, number], [number, number]]
      >,
      required: true,
    },
  },
  setup(props, { slots, expose }) {
    const { id } = props
    const { map, isLoaded } = useContext()
    const source = shallowRef<ImageSourceType>()

    watch(isLoaded, (value) => {
      if (!value) return
      source.value = map.value
        .addSource(id, {
          type: 'image',
          url: props.url,
          coordinates: props.coordinates,
        })
        .getSource(id)
    })

    onUnmounted(() => removeSource(map, id))
    provide(sourceKey, props.id)
    expose({ source })

    return () => isLoaded.value && slots.default!()
  },
})
