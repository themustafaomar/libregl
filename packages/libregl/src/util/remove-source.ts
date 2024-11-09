import { MaybeRef, unref } from 'vue'
import { Map } from 'maplibre-gl'

export function removeSource(map: MaybeRef<Map>, id: string) {
  map = unref(map)
  const layer = map.getSource(id)
  if (layer) {
    map.removeSource(id)
  }
}
