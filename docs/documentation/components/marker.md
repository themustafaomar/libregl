---
title: Marker
metadata:
  title: Marker
  description: The Marker component allows you to add customizable markers to your map at specific coordinates.
---

The *Marker* component allows you to add customizable markers to your map at specific coordinates.

These markers can represent specific locations or points of interest and can be customized with popups, icons, and drag-and-drop functionality.

This is ideal for marking locations, adding points of interest, or allowing users to interact with the map.

**Reference**: [Marker](https://maplibre.org/maplibre-gl-js/docs/API/classes/Marker)

## Usage

The *Marker* component is placed at a specified set of coordinates and can optionally be made draggable, here is a basic example.

<example id="components/marker" />

## Model coordinates 

The coordinates prop in the marker component is reactive meaning that when you change its value it updates the marker position automatically.

When using the `v-model:coordinates="coordinates"` binding with a *Marker*, any changes to the marker’s position such as when it’s dragged are automatically reflected in the coordinates state. 

This means the coordinates are updated without the need to manually set up listeners like `@dragend` to capture the updated position.

The `v-model` binding ensures two-way synchronization, making it effortless to keep track of marker movements in real time.

<example id="components/marker-coordinates" />

## Draggable markers

Drag the marker to a new location on a map and populate its coordinates in a display.

<example id="components/marker-draggable" />

## Add marker on click

Here is how to drop a new marker instance when clicking on the map.

<example id="components/marker-drop" />

## Custom marker

You can fully control how a marker looks by passing a custom DOM element through the element prop.

<example id="components/marker-custom" />

## Using marker with popup

Markers can be combined with the Popup component to display additional information or messages when the marker is clicked or hovered over.

<example id="components/marker-popup" />

## API

### Props

The *Marker* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| coordinates | The location of the marker | [MaybeRef\<LngLatLike\>](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/LngLatLike) |
| anchor | A string indicating the part of the Marker that should be positioned closest to the coordinate set via [Marker.setLngLat](https://maplibre.org/maplibre-gl-js/docs/API/classes/Marker/#setlnglat). Options are `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-left'`, `'top-right'`, `'bottom-left'`, and `'bottom-right'`. | *optional* `string` default is `center` |
| className | Space-separated CSS class names to add to marker element. | *optional* `string` |
| clickTolerance | The max number of pixels a user can shift the mouse pointer during a click on the marker for it to be considered a valid click (as opposed to a marker drag). The default is to inherit map's clickTolerance. | *optional* `number` default is `0` |
| color | The color to use for the default marker if options.element is not provided. The default is light blue. | *optional* `string` default is `'#3FB1CE'` |
| draggable | A boolean indicating whether or not a marker is able to be dragged to a new position on the map. | *optional* `boolean` default is `false` |
| element | DOM element to use as a marker. The default is a light blue, droplet-shaped SVG marker. | *optional* `HTMLElement` |
| offset | The offset in pixels as a PointLike object to apply relative to the element's center. Negatives indicate left and up. | *optional* [PointLike](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/PointLike) default is `[0, 0]` |
| opacity | Marker's opacity when it's in clear view (not behind 3d terrain) | *optional* `string` default is `1` |
| opacityWhenCovered | Marker's opacity when it's behind 3d terrain | *optional* `string` default is `0.2` |
| pitchAlignment | map aligns the Marker to the plane of the map. viewport aligns the Marker to the plane of the viewport. auto automatically matches the value of rotationAlignment. | *optional* [Alignment](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/Alignment) default is `auto` |
| rotation | The rotation angle of the marker in degrees, relative to its respective `rotationAlignment` setting. A positive value will rotate the marker clockwise. | *optional* `string` default is `auto` |
| rotationAlignment | `map` aligns the `Marker`'s rotation relative to the map, maintaining a bearing as the map rotates. `viewport` aligns the `Marker`'s rotation relative to the viewport, agnostic to map rotations. `auto` is equivalent to `viewport`. | *optional* `string` default is `auto` |
| scale | The scale to use for the default marker if options.element is not provided. The default scale corresponds to a height of `41px` and a width of `27px`. | *optional* `string` default is `1` |
| scale | If `true`, rounding is disabled for placement of the marker, allowing for subpixel positioning and smoother movement when the marker is translated. | *optional* `boolean` default is `false` |

### Events

Here's a list of the supported events from Maplibre marker component.

| Name    | Description               | Params |
|---------|---------------------------|------|
| `@dragstart` | Fired when dragging starts. | *event*: [Event](https://maplibre.org/maplibre-gl-js/docs/API/classes/Event) |
| `@drag` | Fired while dragging. | *event*: [Event](https://maplibre.org/maplibre-gl-js/docs/API/classes/Event) |
| `@dragend` | Fired when the marker is finished being dragged. | *event*: [Event](https://maplibre.org/maplibre-gl-js/docs/API/classes/Event) |
