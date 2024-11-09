import { Ref, unref } from 'vue'
import { Map, SourceSpecification } from 'maplibre-gl'

export function removeLayer(
  map: Ref<Map>,
  id: string,
  source?: null | string | SourceSpecification
) {
  const maplibre = unref(map)
  let layer = maplibre.getLayer(id)
  if (layer) {
    maplibre.removeLayer(id)
  }
  if (source && typeof source === 'object') {
    let sourceInstance = maplibre.getSource(id)
    if (sourceInstance) {
      maplibre.removeSource(id)
    }
    sourceInstance = undefined
  }
  layer = undefined
}
