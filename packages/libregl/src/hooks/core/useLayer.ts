import { onUnmounted, shallowRef, watch } from 'vue'
import { LayerSpecification } from 'maplibre-gl'
import { useContext } from './useContext'
import { useEvents } from './useEvents'
import { useListeners } from './useListeners'
import { useSource} from './useSource'
import { normalizeOptions, removeLayer } from '../../util'

export const layerEvents = [
  'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'mousemove',
  'mouseenter',
  'mouseleave',
  'mouseover',
  'mouseout',
  'contextmenu',
  'touchstart',
  'touchend',
  'touchcancel',
] as const

type LayerEvent = typeof layerEvents[number]

type LayerType =
  | 'symbol'
  | 'background'
  | 'fill'
  | 'line'
  | 'circle'
  | 'heatmap'
  | 'fill-extrusion'
  | 'raster'
  | 'hillshade'
  | 'custom'

export function useLayer<T extends LayerSpecification>(
  type: LayerType,
  props: any
) {
  const { source, sourceLayer, beforeId, ...options } = props
  const { map, onLoaded } = useContext()
  const newSource = useSource(source)

  const layer = shallowRef()
  onLoaded(() => layer.value = map.value.addLayer(
    {
      type,
      source: newSource,
      'source-layer': sourceLayer,
      ...normalizeOptions(options),
    } as T,
    beforeId
  ).getLayer(props.id))

  const lazyListeners = useListeners()
  const { onEvent } = useEvents(map)

  lazyListeners.forEach(([name, listener]) => {
    onEvent(name as LayerEvent, props.id, listener)
  })

  watch(() => props.filter, () => {
    map.value.setFilter(layer.value.id, props.filter)
  })

  onUnmounted(() => {
    removeLayer(map, props.id)
  })

  return { map, layer }
}
