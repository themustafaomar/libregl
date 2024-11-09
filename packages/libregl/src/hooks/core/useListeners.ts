import { getCurrentInstance } from 'vue'
import { type MapLibreEvent } from 'maplibre-gl'

export function useListeners(): Array<[string, (event?: MapLibreEvent) => void]> {
  const instance = getCurrentInstance()
  if (!instance) {
    return []
  }

  const props = instance.vnode.props || {}
  const emits = Object.values(instance.type.emits || {})

  // We'll filter out any prop that is not an event and not in the emits list.
  return Object.entries(props)
    .filter(([name]) => emits.includes(name.slice(2).toLowerCase()))
    .map(([name, value]) => ([
      name.slice(2).toLowerCase(),
      value,
    ]))
}
