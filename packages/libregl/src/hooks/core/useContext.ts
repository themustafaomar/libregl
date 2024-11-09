import { inject, watch } from 'vue'
import { Map } from 'maplibre-gl'
import { MapContext, mapKey } from '../../types'

export function useContext(): MapContext & { onLoaded: Function } {
  const context = inject(mapKey, null)
  if (context === null) {
    throw new Error(
      'Missing a parent <Map /> component, make sure that your component is nested within a <Map />.'
    )
  }

  const onLoaded = (fn: (map: Map) => void) =>
    watch(
      context.isLoaded,
      (loaded) => {
        loaded && fn(context.map.value)
      },
      { immediate: true }
    )

  return { ...context, onLoaded }
}
