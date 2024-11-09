import { type ShallowRef, shallowRef, watch } from 'vue'
import { type Map as MapLibre } from 'maplibre-gl'

export type MapId = string | Symbol | undefined

interface Instance {
  map: ShallowRef<MapLibre | null>
  mapRef: ShallowRef<HTMLElement | null>
  isLoaded: ShallowRef<boolean>
}

const maps = new Map<MapId, Instance>()

export function useMap(id: MapId) {
  if (!maps.has(id)) {
    maps.set(id, {
      mapRef: shallowRef(null),
      map: shallowRef(null),
      isLoaded: shallowRef(false),
    })
  }

  return maps.get(id) as Instance
}

export function defineMap(id: MapId, context: Instance) {
  const map = maps.get(id)
  if (maps.has(id)) {
    map!.mapRef.value = context.mapRef.value as HTMLElement
    map!.map.value = context.map.value as MapLibre
    map!.isLoaded.value = context.isLoaded.value
  }
  watch(
    context.isLoaded,
    (value) => {
      if (!map) return
      if (value) {
        map!.isLoaded.value = value
      }
    },
    { once: true }
  )
}

export function deleteMap(id: MapId) {
  maps.delete(id)
}
