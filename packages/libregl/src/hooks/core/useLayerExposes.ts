import { ShallowRef, unref } from 'vue'
import { Evented, Map } from 'maplibre-gl'

type MaybePaintPropOrConfig = string | Record<string, any>

export function useLayerExposes(
  map: ShallowRef<Map>,
  id: string,
  layer: ShallowRef<Evented | undefined>,
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
  const getLayer = () => layer.value

  return { hide, show, toggle, layout, paint, getId, getLayer }
}
