---
title: LineLayer
metadata:
  title: LineLayer
  description: The LineLayer component is used to render lines on your map, ideal for displaying paths, borders, routes, or any other linear features.
---

The *LineLayer* component is used to render lines on your map, ideal for displaying paths, borders, routes, or any other linear features.

It works in conjunction with a data source, such as *GeojsonSource*, which provides the geographic data for the lines.

**Reference**: [Line](https://maplibre.org/maplibre-style-spec/layers/#line)

## Usage

The *LineLayer* component is typically used within a parent source component, such as *GeojsonSource*, which supplies the line geometries.

<example id="layers/line" />

## Style customization

You can also configure the appearance and behavior of the layer using the layout and paint options, similar to other layers in libregl.

Also, the component exposes a `paint()` method, which allows you to modify the paint properties of the layer programmatically.

This makes it easy to dynamically adjust styles, such as circle color or size, based on user input or other conditions.

<example id="layers/line-style" />

## Toggle layer visibility

You can programmatically control the visibility of the line layer on the map using the exposed `toggle()` method.

This method toggles the layer’s visibility by interacting with MapLibre’s `setLayoutProperty()` function.

Behind the scenes, it adjusts the visibility property of the line layer between `visible` and `none`.

<example id="layers/line-visibility" />

## Without source component

And of course, when using *CircleLayer* without a parent source component, you can pass a source prop directly to the layer, here is an example.

<example id="layers/line-without-source" />

## Rerendering data

The data prop in the *GeojsonSource* is reactive, once the data changes, libregl automatically rerenders the layer like a charm, ensuring your map always reflects the latest data, here is an example.

<example id="layers/line-data" />

## API

### Props

The *Heatmap* component's props.

:::info
While an id is typically required for MapLibre layers, the *HeatmapLayer* component automatically generates a unique id if none is provided.
:::

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| id    | The id for the source. Must not be used by any existing source.                                                                            | *Optional* `string` |
| metadata | Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'maplibre:'. | *Optional* |
| source | Name of a source description to be used for this layer. | *Optional* [GeoJSONSourceSpecification](https://maplibre.org/maplibre-style-spec/sources/#geojson) or `string` |
| minzoom | The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. | *Optional* `number` in range [0, 24]. |
| maxzoom | The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden. | *Optional* `number` in range [0, 24]. |
| filter | A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The feature-state expression is not supported in filter expressions. | *Optional* [filter](https://maplibre.org/maplibre-style-spec/expressions/) |
| layout | Layout properties for the layer. | *Optional* [HeatmapSpecification['layout']](https://maplibre.org/maplibre-style-spec/layers/#circle-sort-key) |
| paint | Default paint properties for this layer. | *Optional* [HeatmapSpecification['paint']](https://maplibre.org/maplibre-style-spec/layers/#circle-radius) |
