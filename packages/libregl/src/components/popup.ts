import {
  defineComponent,
  shallowRef,
  onUnmounted,
  inject,
  PropType,
  MaybeRef,
  h,
  ref,
} from 'vue'
import {
  Offset,
  PositionAnchor,
  Popup as MlPopup,
  LngLatLike,
  MapLibreEvent,
} from 'maplibre-gl'
import { markerKey } from '../types'
import { useContext } from '../hooks/core'

export const Popup = defineComponent({
  name: 'Popup',
  props: {
    coordinates: {
      type: [Array, Object] as PropType<MaybeRef<LngLatLike>>,
      default: () => [0, 0],
    },
    closeButton: {
      type: Boolean,
      default: true,
    },
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    closeOnMove: {
      type: Boolean,
      default: false,
    },
    focusAfterOpen: {
      type: Boolean,
      default: true,
    },
    anchor: String as PropType<PositionAnchor>,
    offset: [Number, Object, Array] as PropType<Offset>,
    className: String,
    maxWidth: {
      type: String,
      default: '240px',
    },
    subpixelPositioning: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
  },
  emits: ['open'],
  setup(props, { expose, slots, emit }) {
    const { map } = useContext()
    const popup = shallowRef<MlPopup>(new MlPopup(props))
    const popupRef = ref()

    const marker = inject(markerKey, null)
    if (marker) {
      marker.value.setPopup(popup.value)
    } else {
      popup.value.setLngLat(props.coordinates as LngLatLike).addTo(map.value)
    }

    if (props.text) {
      popup.value.setText(props.text)
    }

    const opened = ref(false)
    const onOpen = (e: MapLibreEvent) => {
      emit('open', e)
      if (!opened.value) {
        popup.value.setDOMContent(popupRef.value)
        opened.value = true
      }
    }
    popup.value.on('open', onOpen)

    expose({ popup })
    onUnmounted(() => {
      popup.value.off('open', onOpen)
    })

    return () => {
      return h('div', { ref: popupRef }, slots.default?.())
    }
  },
})
