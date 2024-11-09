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

## Using marker with popup

Markers can be combined with the Popup component to display additional information or messages when the marker is clicked or hovered over.

<example id="components/marker-popup" />

## API

### Props

The *Marker* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| coordinates | The location of the marker | [MaybeRef\<LngLatLike\>](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/LngLatLike) |
| draggable | A boolean indicating whether or not a marker is able to be dragged to a new position on the map. | *optional* `boolean` default is `false` |
| offset | The offset in pixels as a PointLike object to apply relative to the element's center. Negatives indicate left and up. | *optional* [PointLike](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/PointLike) default is `[0, 0]` |
| pitchAlignment | map aligns the Marker to the plane of the map. viewport aligns the Marker to the plane of the viewport. auto automatically matches the value of rotationAlignment. | *optional* [Alignment](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/Alignment) default is `auto` |

### Events

Here's a list of the supported events from Maplibre marker component.

| Name    | Description               | Params |
|---------|---------------------------|------|
| `@dragstart` | Fired when dragging starts. | *event*: [Event](https://maplibre.org/maplibre-gl-js/docs/API/classes/Event) |
| `@drag` | Fired while dragging. | *event*: [Event](https://maplibre.org/maplibre-gl-js/docs/API/classes/Event) |
| `@dragend` | Fired when the marker is finished being dragged. | *event*: [Event](https://maplibre.org/maplibre-gl-js/docs/API/classes/Event) |
