import { onUnmounted, Ref, shallowRef } from 'vue'
import { Map, MapEventType, MapLayerEventType, Subscription } from 'maplibre-gl'

type Listener = (...args: any) => void
type MapLayerEvent = keyof MapLayerEventType

export function useEvents(map: Ref<Map | undefined>) {
  const registry = shallowRef<Subscription[]>([])
  const onEvent = (
    name: MapLayerEvent | keyof MapEventType,
    layerId: string | Listener,
    listener?: Listener
  ) => {
    const subscription = typeof layerId === 'function'
      ? map.value!.on(name, layerId as Listener)
      : map.value!.on(name as MapLayerEvent, layerId, listener!)

    registry.value.push(subscription)

    return listener
  }

  const _flush = () => {
    registry.value.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    })
    registry.value = []
  }

  onUnmounted(_flush)

  return { onEvent }
}
