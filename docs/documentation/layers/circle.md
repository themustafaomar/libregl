---
title: CircleLayer
metadata:
  title: CircleLayer
  description: The CircleLayer is used to display points as circles on your MapLibre map.
---

The *CircleLayer* is used to display points as circles on your MapLibre map.

This layer type is particularly useful for visualizing point data with customizable circle radii, colors, and other styling options.

It is often used in conjunction with a source that provides point data, such as *GeojsonSource*.

**Reference**: [Circle](https://maplibre.org/maplibre-style-spec/layers/#fill)

## Usage

To use the *CircleLayer* component, you typically nest it within a source component like *GeojsonSource*.

The *CircleLayer* allows you to customize the appearance of circles using various paint properties. Here’s an example:

<example id="layers/circle" />

## Style customization

You can also configure the appearance and behavior of the layer using the layout and paint options, similar to other layers in libregl.

Also, the component exposes a `paint()` method, which allows you to modify the paint properties of the layer programmatically.

This makes it easy to dynamically adjust styles, such as circle color or size, based on user input or other conditions.

<example id="layers/circle-style" />

## Usage without source

The *CircleLayer* can operate independently without needing to be nested within a source component like *GeojsonSource*.

When using *CircleLayer* without a parent source component, you can pass a source prop directly to the layer.

This prop allows you to configure the source type, data, and other source-related options within the *CircleLayer* itself, streamlining the setup of your map layers, here’s an example:

<example id="layers/circle-without-source" />

## Rerendering data

The data prop in the *GeojsonSource* is reactive, once the data changes, LibreGL automatically rerenders the layer like a charm, ensuring your map always reflects the latest data, here is an example.

<example id="layers/circle-data" />

## Listening to events

You can listen to layer's events once you pass the event name like `@click`, `@mousemove` and more, to learn more about supported events please visit the offical documentation at [MapLayerEventType](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerEventType/).

<example id="layers/circle-events" />

## API

### Events

The *CircleLayer* component's events.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| click | Fired when a pointing device (usually a mouse) is pressed and released contains a visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| contextmenu | Fired when the right button of the mouse is clicked or the context menu key is pressed within visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| dblclick | Fired when a pointing device (usually a mouse) is pressed and released twice contains a visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| mousedown | Fired when a pointing device (usually a mouse) is pressed while inside a visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| mouseenter | Fired when a pointing device (usually a mouse) enters a visible portion of a specified layer from outside that layer or outside the map canvas. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| mouseleave | Fired when a pointing device (usually a mouse) leaves a visible portion of a specified layer, or leaves the map canvas. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| mousemove | Fired when a pointing device (usually a mouse) is moved while the cursor is inside a visible portion of the specified layer. As you move the cursor across the layer, the event will fire every time the cursor changes position within that layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| mouseout | Fired when a point device (usually a mouse) leaves the visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| mouseover | Fired when a pointing device (usually a mouse) is moved inside a visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| mouseup | Fired when a pointing device (usually a mouse) is released while inside a visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| touchcancel | Fired when a touchstart event occurs within the visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| touchend | Fired when a touchend event occurs within the visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |
| touchstart | Fired when a touchstart event occurs within the visible portion of the specified layer. | [MapLayerMouseEvent](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerMouseEvent/) |

### Props

The *CircleLayer* component's props.

:::info
While an id is typically required for MapLibre layers, the *CircleLayer* component automatically generates a unique id if none is provided.
:::

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| id    | The id for the source. Must not be used by any existing source.                                                                            | *Optional* `string` |
| metadata | Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'maplibre:'. | *Optional* |
| source | Name of a source description to be used for this layer. | *Optional* [GeoJSONSourceSpecification](https://maplibre.org/maplibre-style-spec/sources/#geojson) or `string` |
| minzoom | The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. | *Optional* `number` in range [0, 24]. |
| maxzoom | The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden. | *Optional* `number` in range [0, 24]. |
| filter | A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The feature-state expression is not supported in filter expressions. | *Optional* [filter](https://maplibre.org/maplibre-style-spec/expressions/) |
| layout | Layout properties for the layer. | *Optional* [CircleLayerSpecification['layout']](https://maplibre.org/maplibre-style-spec/layers/#circle-sort-key) |
| paint | Default paint properties for this layer. | *Optional* [CircleLayerSpecification['paint']](https://maplibre.org/maplibre-style-spec/layers/#circle-radius) |
