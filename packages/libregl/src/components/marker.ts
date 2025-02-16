import {
  defineComponent,
  shallowRef,
  onUnmounted,
  watch,
  provide,
  watchEffect,
  toValue,
  isProxy,
  PropType,
  MaybeRef,
} from 'vue'
import {
  LngLatLike,
  Marker as MlMarker,
  Alignment,
  PointLike,
  LngLat,
  Subscription,
} from 'maplibre-gl'
import { markerKey } from '../types'
import { useContext } from '../hooks/core'
import { normalizeOptions } from '../util'

export type MarkerEvent = {
  type: 'dragstart' | 'drag' | 'dragend'
  target: MlMarker
  lngLat: LngLat
}

type EventType = MarkerEvent['type']
type CustomMarkerEvent = Omit<MarkerEvent, 'lngLat'>

export const Marker = defineComponent({
  name: 'Marker',
  props: {
    coordinates: {
      type: [Array, Object] as PropType<MaybeRef<LngLatLike>>,
      required: true,
    },
    draggable: {
      type: Boolean,
      // This ensures that the normalizeOptions function won't return a value unless it's a boolean.
      default: undefined,
    },
    offset: Object as PropType<PointLike>,
    pitchAlignment: String as PropType<Alignment>,
    rotation: Number,
    rotationAlignment: String as PropType<Alignment>,
    onClick: Function as PropType<(e: MarkerEvent) => void>,
    onDragStart: Function as PropType<(e: MarkerEvent) => void>,
    onDrag: Function as PropType<(e: MarkerEvent) => void>,
    onDragEnd: Function as PropType<(e: MarkerEvent) => void>,
    modelValue: { type: Boolean, default: true },
  },
  emits: ['update:coordinates'],
  setup(props, { slots, expose, emit }) {
    const { modelValue, ...options } = props
    const marker = shallowRef<MlMarker>(new MlMarker(
      normalizeOptions(options)
    ))
    const setLngLat = (lngLat: LngLatLike) => marker.value.setLngLat(lngLat)
    setLngLat(
      (isProxy(props.coordinates)
        ? toValue(props.coordinates)
        : props.coordinates) as LngLatLike
    )

    const { map } = useContext()
    const addToMap = () => {
      marker.value.addTo(map.value)
    }
    if (modelValue) {
      addToMap()
    }

    const removeMarker = () => marker.value.remove()
    watch(
      () => props.modelValue,
      (value) => {
        value === true ? addToMap() : removeMarker()
      }
    )

    const listeners = shallowRef<Subscription[]>([])
    const bindEventListeners = () => {
      bindEvent('dragstart', props.onDragStart!)
      bindEvent('drag', props.onDrag!)
      bindEvent('dragend', props.onDragEnd!)
    }
    const bindEvent = (type: EventType, handler: (e: MarkerEvent) => void) => {
      if (marker.value.listens(type)) {
        return console.warn(
          `[libregl] detected duplication on event [${type}] please report this to https://github.com/themustafaomar/libregl/issues/new`
        )
      }
      if (!marker.value) return
      // We always need to bind `dragend` to the marker to allow syncing
      // the v-model:coordinates but we don't need to do it for the other ones
      // so if we don't have a handler we don't need to bind.
      if (
        type === 'drag' && typeof handler !== 'function' ||
        type === 'dragstart' && typeof handler !== 'function'
      ) return
      const listener = ({ target }: CustomMarkerEvent) => {
        const lngLat = target.getLngLat()
        if (type === 'dragend') {
          emit('update:coordinates', lngLat.toArray())
        }
        if (typeof handler === 'function') {
          handler({
            type,
            target,
            lngLat
          })
        }
      }
      const subscription = marker.value.on(type, listener)
      listeners.value.push(subscription)
    }

    const removeEventListeners = () => {
      if (!listeners.value.length) return
      listeners.value.forEach((subscription) => subscription.unsubscribe())
      listeners.value = []
    }
    watchEffect(() => {
      // When draggable is set to true and then changing it to `false`
      // HMR is done, the event listeners are removed but it still
      // dragable, will try to fix this in the future.
      props.draggable ? bindEventListeners() : removeEventListeners()
    })
    watch(
      () => props.coordinates,
      (value) => setLngLat(value as LngLatLike)
    )

    onUnmounted(() => {
      removeEventListeners()
      marker.value.remove()
    })
    provide(markerKey, marker)
    expose({ removeMarker, marker })

    return () => slots.default && slots.default()
  },
})
