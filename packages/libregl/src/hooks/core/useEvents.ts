import { onUnmounted, Ref, shallowRef } from 'vue'
import { Map as Maplibre, Subscription } from 'maplibre-gl'

export function useEvents(map: Ref<Maplibre | undefined>) {
  const registry = shallowRef<Subscription[]>([])

  const onEvent = (
    name: string,
    listener: (...args: any) => void
  ) => {
    registry.value.push(map.value!.on(name, listener))

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
