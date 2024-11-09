import { Ref, unref } from 'vue'
import { Map } from 'maplibre-gl'

type MaybePaintPropOrConfig = string | Record<string, any>

export function useLayerExposes(
  map: Ref<Map>,
  id: string,
) {
  const maplibre = unref(map)
  const hide = () => maplibre.setLayoutProperty(id, 'visibility', 'none')
  const show = () => maplibre.setLayoutProperty(id, 'visibility', 'visible')
  const toggle = () => {
    const visibility = maplibre.getLayoutProperty(id, 'visibility')
    visibility === 'none' ? show() : hide()
  }
  const paint = (key: MaybePaintPropOrConfig, value: unknown) => {
    if (typeof key === 'object') {
      return Object.keys(key).forEach((prop) => {
        maplibre.setPaintProperty(id, prop, key[prop])
      })
    }
    maplibre.setPaintProperty(id, key, value)
  }
  const layout = (key: MaybePaintPropOrConfig, value: unknown) => {
    if (typeof key === 'object') {
      return Object.keys(key).forEach((prop) => {
        maplibre.setLayoutProperty(id, prop, key[prop])
      })
    }
    maplibre.setLayoutProperty(id, key, value)
  }
  const getId = () => id

  return { hide, show, toggle, layout, paint, getId }
}
