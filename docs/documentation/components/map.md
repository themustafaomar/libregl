---
title: Map
metadata:
  title: Map
  description: The Map component serves as the foundation for displaying a Maplibre map within your Vue application.
---

The *Map* component serves as the foundation for displaying a Maplibre map within your Vue application.

It provides the same powerful features as the core Maplibre GL JS library but wraps them in a Vue component, making it easier to integrate and manage in your Vue projects.

You can change the map's state, add or remove layers, handle user interactions, and more—all through a familiar Vue interface.

The component will initialize the map on your page and give you access to the full suite of Maplibre methods and properties via the Vue ecosystem.

**Reference**: [Map](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map)

## Usage

In this example, the *Map* component is initialized with basic options, including the map container, center coordinates, zoom level, and style.

The component handles the underlying initialization, making it easy to get started with Maplibre in a Vue environment.

<example id="components/map" />

## Model arguments

The *Map* component allows you to easily synchronize important map properties with your Vue app’s state, enabling real-time updates for the map's view, such as `zoom`, `center`, `pitch`, and `bearing`.

For example, passing `v-model:zoom="zoom"` would update the `zoom` state once the map zoomed in/out without manually listening for the event.

<example id="components/map-model-arguments" />

## Map style

The map's style prop is reactive, it means you can change the style of the map anytime and get real-time change.

<example id="components/map-style" />

## API

### Props

The *Map* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| id    | The id for the source. Must not be used by any existing source.                                                                            | *Optional* `string` |

### Events

Here's a list of the supported events from Maplibre.

| Name  | Description               | Params |
|-------|---------------------------|------|
| `@error` | Fired when an error occurs. This is GL JS's primary error reporting mechanism. We use an event instead of `throw` to better accommodate asynchronous operations. If no listeners are to the `error` event, the error will be printed to the console. | *error*: ErrorEvent |
| `@load` | Fired immediately after all necessary resources have been downloaded and the first visually complete rendering of the map has occurred. | *load*: [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent) |
| `@idle` | Fired after the last frame rendered before the map enters an "idle" state:, No camera transitions are in progress, All currently requested tiles have loaded and All fade/transition animations have completed | *idle*: [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent) |
| `@remove` | Fired immediately after the map has been removed with [Map#remove](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#remove). | *remove*: [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent) |
| `@render` | Fired whenever the map is drawn to the screen, as the result of a change to the map's position, zoom, pitch, or bearing, a change to the map's style, a change to a GeoJSON source and the loading of a vector tile, GeoJSON file, glyph, or sprite | *render*: [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent) |
| `@resize` | Fired immediately after the map has been resized. | *resize*: [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent) |
| `@webglcontextlost` | Fired when the WebGL context is lost. | *webglcontextlost*: [MapContextEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapContextEvent) |
| `@webglcontextrestored` | Fired when the WebGL context is restored. | *webglcontextrestored*: [MapContextEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapContextEvent) |
| `@dataloading` | Fired when any map data (style, source, tile, etc) begins loading or changing asynchronously. All dataloading events are followed by a `data`, `dataabort` or `error` event. | *dataloading*: [MapDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapDataEvent) |
| `@data` | Fired when any map data loads or changes. See [MapDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapDataEvent) for more information. | *data*: [MapDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapDataEvent) |
| `@tiledataloading` | - | *tiledataloading*: [MapDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapDataEvent) |
| `@sourcedataloading` | Fired when one of the map's sources begins loading or changing asynchronously. All sourcedataloading events are followed by a `sourcedata`, `sourcedataabort` or `error` event. | *sourcedataloading*: [MapSourceDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapSourceDataEvent) |
| `@styledataloading` | Fired when the map's style begins loading or changing asynchronously. All styledataloading events are followed by a `styledata` or `error` event. | *styledataloading*: [MapStyleDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapStyleDataEvent) |
| `@sourcedata` | Fired when a request for one of the map's sources' data is aborted. | *sourcedataabort*: [MapSourceDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapSourceDataEvent/) |
| `@styledata` | Fired when the map's style loads or changes. | *styledata*: [MapStyleDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapStyleDataEvent) |
| `@styleimagemissing` | Fired when an icon or pattern needed by the style is missing. The missing image can be added with [Map#addImage](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#addimage) within this event listener callback to prevent the image from being skipped. This event can be used to dynamically generate icons and patterns. | *styleimagemissing*: [MapStyleImageMissingEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapStyleImageMissingEvent) |
| `@dataabort` | Fired when a request for one of the map's sources' tiles or data is aborted. | *dataabort*: [MapDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapDataEvent) |
| `@sourcedataabort` | Fired when a request for one of the map's sources' data is aborted. | *sourcedataabort*: [MapSourceDataEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapSourceDataEvent) |
| `@boxzoomcancel` | Fired when the user cancels a "box zoom" interaction, or when the bounding box does not meet the minimum size threshold. See [BoxZoomHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/BoxZoomHandler). | *boxzoomcancel*: [MapLibreZoomEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreZoomEvent) |
| `@boxzoomstart` | Fired when a "box zoom" interaction starts. See [BoxZoomHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/BoxZoomHandler). | *boxzoomstart*: [MapLibreZoomEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreZoomEvent) |
| `@boxzoomend` | Fired when a "box zoom" interaction ends. See [BoxZoomHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/BoxZoomHandler/). | *boxzoomend*: [MapLibreZoomEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreZoomEvent) |
| `@touchcancel` | Fired when a touchcancel event occurs within the map. | *touchcancel*: [MapTouchEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapTouchEvent) |
| `@touchmove` | Fired when a touchmove event occurs within the map. | *touchmove*: [MapTouchEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapTouchEvent) |
| `@touchend` | Fired when a touchend event occurs within the map. | *touchend*: [MapTouchEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapTouchEvent) |
| `@touchstart` | Fired when a touchstart event occurs within the map. | *touchstart*: [MapTouchEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapTouchEvent) |
| `@click` | Fired when a pointing device (usually a mouse) is pressed and released at the same point on the map. | *click*: [MapMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapMouseEvent) |
| `@contextmenu` | Fired when the right button of the mouse is clicked or the context menu key is pressed within the map. | *contextmenu*: [MapMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapMouseEvent) |
| `@dblclick` | Fired when a pointing device (usually a mouse) is pressed and released twice at the same point on the map in rapid succession. | *dblclick*: [MapMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapMouseEvent) |
| `@mousemove` | Fired when a pointing device (usually a mouse) is moved while the cursor is inside the map. As you move the cursor across the map, the event will fire every time the cursor changes position within the map. | *mousemove*: [MapMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapMouseEvent) |
| `@mouseup` | Fired when a pointing device (usually a mouse) is released within the map. | *mouseup*: [MapMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapMouseEvent) |
| `@mousedown` | Fired when a pointing device (usually a mouse) is pressed within the map. | *mousedown*: [MapMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapMouseEvent) |
| `@mouseout` | Fired when a point device (usually a mouse) leaves the map's canvas. | *mouseout*: [MapMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapMouseEvent) |
| `@mouseover` | Fired when a pointing device (usually a mouse) is moved within the map. As you move the cursor across a web page containing a map, the event will fire each time it enters the map or any child elements. | mouseover: [MapMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapMouseEvent) |
| `@movestart` | Fired just before the map begins a transition from one view to another, as the result of either user interaction or methods such as [Map#jumpTo](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#jumpto). | *movestart*: MapLibreEvent<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`> |
| `@move` | Fired just after the map completes a transition from one view to another, as the result of either user interaction or methods such as [Map#jumpTo](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#jumpto). | *moveend*: MapLibreEvent<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`> |
| `@moveend` | Fired just after the map completes a transition from one view to another, as the result of either user interaction or methods such as [Map#jumpTo](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#jumpt). | *moveend*: MapLibreEvent<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`> |
| `@zoomstart` | Fired just before the map begins a transition from one zoom level to another, as the result of either user interaction or methods such as [Map#flyTo](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapEventType/#zoomstart). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`> |
| `@zoom` | Fired repeatedly during an animated transition from one zoom level to another, as the result of either user interaction or methods such as [Map#flyTo](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapEventType/#zoom). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`> |
| `@zoomend` | Fired just after the map completes a transition from one zoom level to another, as the result of either user interaction or methods such as [Map#flyTo](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#flyto). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`> |
| `@rotatestart` | Fired when a "drag to rotate" interaction starts. See [DragRotateHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/DragRotateHandler). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `undefined`> |
| `@rotate` | Fired repeatedly during a "drag to rotate" interaction. See [DragRotateHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/DragRotateHandler). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` | `TouchEvent` | `undefined`> |
| `@rotateend` | Fired when a "drag to rotate" interaction ends. See [DragRotateHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/DragRotateHandler). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `undefined`> |
| `@dragstart` | Fired when a "drag to pan" interaction starts. See [DragPanHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/DragPanHandler). |  [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `undefined`> |
| `@drag` | Fired repeatedly during a "drag to pan" interaction. See [DragPanHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/DragPanHandler). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `undefined`> |
| `@dragend` | Fired when a "drag to pan" interaction ends. See [DragPanHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/DragPanHandler). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `undefined`> |
| `@pitchstart` | Fired whenever the map's pitch (tilt) begins a change as the result of either user interaction or methods such as [Map#flyTo](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#flyto). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `undefined`> |
| `@pitch` | Fired repeatedly during the map's pitch (tilt) animation between one state and another as the result of either user interaction or methods such as [Map#flyTo](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#flyto). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `undefined`> |
| `@pitchend` | Fired immediately after the map's pitch (tilt) finishes changing as the result of either user interaction or methods such as [Map#flyTo](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#flyto). | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`MouseEvent` \| `TouchEvent` \| `undefined`> |
| `@wheel` | Fired when a wheel event occurs within the map. | [MapWheelEvent](https://maplibre.org/maplibre-gl-js/docs/API/classes/MapWheelEvent) |
| `@terrain` | Fired when terrain is changed | [MapTerrainEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapTerrainEvent) |
| `@cooperativegestureprevented` | Fired whenever the cooperativeGestures option prevents a gesture from being handled by the map. This is useful for showing your own UI when this happens. | [MapLibreEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLibreEvent)<`WheelEvent` | `TouchEvent`> & `object` |
