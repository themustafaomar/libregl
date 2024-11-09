import { onUnmounted, Ref, shallowRef } from 'vue'
import { Map as Maplibre } from 'maplibre-gl'

type Listener = (...args: any) => void

export function useEvents(map: Ref<Maplibre | undefined>) {
  const registry = shallowRef(new Map<string, Listener>())

  const onEvent = (name: string, listener: Listener) => {
    map.value!.on(name, listener)
    registry.value.set(name, listener)
    return listener
  }

  const _flush = () => {
    registry.value.forEach((listener, name) => {
      map.value!.off(name, listener)
    })
    registry.value.clear()
  }

  onUnmounted(() => {
    _flush()
  })

  return { onEvent }
}
