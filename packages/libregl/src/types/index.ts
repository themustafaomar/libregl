import type { InjectionKey, Ref, ShallowRef } from 'vue'
import type { Listener, Map, Marker } from 'maplibre-gl'

export type ListenerRegistery<T> = Array<{
  type: T
  listener: Listener
}>

/**
 * The map context with an instance
 */
export interface MapContext {
  map: Ref<Map>
  mapRef: Ref<HTMLElement | string>
  isLoaded: Ref<boolean>
}

export const mapKey = Symbol('mapContext') as InjectionKey<MapContext>

/**
 * The marker instance to inject in popup component
 */
type MarkerContext = ShallowRef<Marker>

export const markerKey = Symbol('markerContext') as InjectionKey<MarkerContext>

/**
 * The source context to inject the source id in layers
 */
export type SourceContext = string

export const sourceKey = Symbol('sourceContext') as InjectionKey<string>
