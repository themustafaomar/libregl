import { type PropType, defineComponent, shallowRef, onUnmounted } from 'vue'
import {
  GeolocateControl as MlGeolocateControl,
  ControlPosition,
  FitBoundsOptions,
} from 'maplibre-gl'
import { useContext } from '../../hooks/core'
import { ListenerRegistery } from '../../types'
import { normalizeOptions } from '../../util'

const geoLocationEvents = [
  'trackuserlocationend',
  'trackuserlocationstart',
  'userlocationlostfocus',
  'userlocationfocus',
  'geolocate',
  'error',
  'outofmaxbounds',
] as const

type GeolocateEvents = (typeof geoLocationEvents)[number]

export const GeolocateControl = defineComponent({
  name: 'GeolocateControl',
  props: {
    position: String as PropType<ControlPosition>,
    positionOptions: Object as PropType<PositionOptions>,
    fitBoundsOptions: Object as PropType<FitBoundsOptions>,
    trackUserLocation: Boolean,
    showAccuracyCircle: { type: Boolean, default: undefined },
    showUserLocation: { type: Boolean, default: undefined },
  },
  emits: Array.from(geoLocationEvents),
  setup(props, { emit }) {
    const { position, ...options } = props
    const geolocate = shallowRef<MlGeolocateControl>(
      new MlGeolocateControl(normalizeOptions(options))
    )

    const { map } = useContext()
    map.value.addControl(geolocate.value, position)

    const listeners = shallowRef<ListenerRegistery<GeolocateEvents>>([])
    geoLocationEvents.forEach((type: GeolocateEvents) => {
      const listener = (event: any) => emit(type, event)
      geolocate.value!.on(type, listener)
      listeners.value.push({
        type,
        listener,
      })
    })

    onUnmounted(() => {
      if (!geolocate.value) return
      map.value.removeControl(geolocate.value)
      listeners.value.forEach(({ type, listener }) => {
        geolocate.value?.off(type, listener)
      })
    })

    return () => {}
  },
})
