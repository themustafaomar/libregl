import {
  Ref,
  defineComponent,
  h,
  onMounted,
  PropType,
  provide,
  watch,
  shallowRef,
  onUnmounted,
} from 'vue'
import {
  AttributionControlOptions,
  Map as MapLibre,
  MapLibreEvent,
  AroundCenterOptions,
  CameraUpdateTransformFunction,
  ControlPosition,
  DragPanOptions,
  FitBoundsOptions,
  GestureOptions,
  LngLatBoundsLike,
  LngLatLike,
  RequestTransformFunction,
  StyleSpecification,
} from 'maplibre-gl'
import { mapKey } from '../types'
import { useEvents, useListeners } from '../hooks/core'
import { defineMap, deleteMap, MapId } from '../hooks/useMap'
import { normalizeOptions } from '../util'
import { useMapDefaults } from '../hooks/core'

const immediateEvents = [
  'zoomend',
  'dragend',
  'rotateend',
  'pitchend',
] as const

type ImmediateEvents = (typeof immediateEvents)[number]

export const Map = defineComponent({
  name: 'Map',
  props: {
    id: [String, Symbol] as PropType<MapId>,
    width: { type: String },
    height: { type: String },
    hash: [Boolean, String],
    interactive: { type: Boolean, default: true },
    bearingSnap: Number,
    attributionControl: {
      type: [Boolean, Object] as PropType<false | AttributionControlOptions>,
      default: undefined,
    },
    maplibreLogo: Boolean,
    logoPosition: String as PropType<ControlPosition>,
    failIfMajorPerformanceCaveat: Boolean,
    preserveDrawingBuffer: Boolean,
    antialias: { type: Boolean, default: undefined },
    refreshExpiredTiles: { type: Boolean, default: true },
    maxBounds: Object as PropType<LngLatBoundsLike>,
    scrollZoom: {
      type: [Boolean, Object] as PropType<false | AroundCenterOptions>,
      default: true,
    },
    minZoom: Number,
    maxZoom: Number,
    minPitch: Number,
    maxPitch: Number,
    boxZoom: { type: Boolean, default: true },
    dragRotate: { type: Boolean, default: true },
    dragPan: {
      type: [Boolean, Object] as PropType<boolean | DragPanOptions>,
      default: true,
    },
    keyboard: { type: Boolean, default: true },
    doubleClickZoom: { type: Boolean, default: true },
    touchZoomRotate: {
      type: [Boolean, Object] as PropType<boolean | AroundCenterOptions>,
      default: true,
    },
    touchPitch: {
      type: [Boolean, Object] as PropType<boolean | AroundCenterOptions>,
      default: true,
    },
    cooperativeGestures: Boolean as PropType<GestureOptions>,
    trackResize: { type: Boolean, default: true },
    center: Object as PropType<LngLatLike>,
    zoom: Number,
    bearing: Number,
    pitch: Number,
    renderWorldCopies: { type: Boolean, default: true },
    maxTileCacheSize: { type: Number, default: null },
    maxTileCacheZoomLevels: Number,
    transformRequest: Function as PropType<RequestTransformFunction>,
    transformCameraUpdate: Function as PropType<CameraUpdateTransformFunction>,
    locale: Object as PropType<any>, // not sure how to type this
    fadeDuration: Number,
    crossSourceCollisions: { type: Boolean, default: true },
    collectResourceTiming: { type: Boolean, default: false },
    clickTolerance: Number,
    bounds: [Array, Object] as PropType<LngLatBoundsLike>,
    fitBoundsOptions: Object as PropType<FitBoundsOptions>,
    localIdeographFontFamily: [String, Boolean] as PropType<string | false>,
    style: [Object, String] as PropType<StyleSpecification | string>,
    pitchWithRotate: { type: Boolean, default: true },
    pixelRatio: Number,
    validateStyle: { type: Boolean, default: true },
    maxCanvasSize: null as unknown as PropType<[number, number]>,
    cancelPendingTileRequestsWhileZooming: { type: Boolean, default: true },
  },
  emits: [
    'error',
    'load',
    'idle',
    'remove',
    'render',
    'resize',
    'webglcontextlost',
    'webglcontextrestored',
    'dataloading',
    'data',
    'tiledataloading',
    'sourcedataloading',
    'styledataloading',
    'sourcedata',
    'styledata',
    'styleimagemissing',
    'dataabort',
    'sourcedataabort',
    'boxzoomcancel',
    'boxzoomstart',
    'boxzoomend',
    'touchcancel',
    'touchmove',
    'touchend',
    'touchstart',
    'click',
    'contextmenu',
    'dblclick',
    'mousemove',
    'mouseup',
    'mousedown',
    'mouseout',
    'mouseover',
    'movestart',
    'move',
    'moveend',
    'zoomstart',
    'zoom',
    'zoomend',
    'rotatestart',
    'rotate',
    'rotateend',
    'dragstart',
    'drag',
    'dragend',
    'pitchstart',
    'pitch',
    'pitchend',
    'wheel',
    'terrain',
    'cooperativegestureprevented',
    'update:zoom',
    'update:center',
    'update:pitch',
    'update:rotate',
  ],
  setup(props, { slots, emit, expose }) {
    const map = shallowRef<MapLibre>()
    const isLoaded = shallowRef(false)
    const mapRef: Ref<HTMLElement | string> = shallowRef('')

    const { style, center, attributionControl, height, width, ...options } = props
    const { onEvent } = useEvents(map)
    const lazyListeners = useListeners()
    const defaults = useMapDefaults()

    const context = { map, mapRef, isLoaded }

    const createMap = () => {
      map.value = new MapLibre({
        container: mapRef.value,
        style: style || defaults.style,
        center: center || defaults.center,
        attributionControl: attributionControl || defaults.attributionControl || true,
        ...normalizeOptions(options),
      })
      defineMap(props.id, context as any)

      onEvent('load', (event: MapLibreEvent) => {
        isLoaded.value = true
        emit('load', event)
      })

      immediateEvents.forEach((name: ImmediateEvents) => {
        onEvent(name, (event: MapLibreEvent) => {
          emit(name, event)
          if (name === 'zoomend') emit('update:zoom', map.value?.getZoom())
          else if (name === 'dragend') emit('update:center', map.value?.getCenter())
          else if (name === 'rotateend') emit('update:rotate', map.value?.getBearing())
          else if (name === 'pitchend') emit('update:pitch', map.value?.getPitch())
        })
      })

      // Dynamically listen for Maplibre's events only when needed, optimizing
      // performance by avoiding unnecessary event listeners for unused events.
      lazyListeners.forEach(([name, listener]) => {
        // We've already listened for these special immediate events and no
        // need to listen to them again so we're going to ignore them.
        if (
          name === 'load' ||
          immediateEvents.includes(name as ImmediateEvents)
        ) {
          return
        }
        onEvent(name, listener)
      })
    }

    onMounted(createMap)
    onUnmounted(() => {
      map.value!.remove()
      deleteMap(props.id)
    })

    watch(() => props.style, (style) => map.value!.setStyle(style!))
    watch(() => props.zoom, (zoom) => zoom && map.value!.zoomTo(zoom))
    watch(() => props.center, (center) => center && map.value!.setCenter(center))
    watch(() => props.bearing, (bearing) => bearing && map.value!.setBearing(bearing))
    watch(() => props.pitch, (pitch) => pitch && map.value!.setPitch(pitch))

    // `context.map` is either a map instance or `undefined` but
    // I declare it as `Ref<Map>` without `undefined` this avoids needing to
    // use `!` or `?.` at each `map.value` access, as it's guaranteed to be defined.
    provide(mapKey, context as any)
    expose({
      map,
      hasLoaded: isLoaded,
      // @ts-ignore
      call: (method: string, ...args: any) => map.value[method](...args),
    })

    return () =>
      h(
        'div',
        {
          ref: mapRef,
          style: `width: ${width || defaults.width}; height: ${height || defaults.height};`,
        },
        map.value && slots.default ? slots.default() : undefined
      )
  },
})
