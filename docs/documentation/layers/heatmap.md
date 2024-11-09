---
title: HeatmapLayer
metadata:
  title: HeatmapLayer
  description: The HeatmapLayer allows you to visualize the density of point data on your map using a heatmap.
---

The *HeatmapLayer* allows you to visualize the density of point data on your map using a heatmap.

This type of layer is particularly useful for representing areas of high activity<br>
such as population density, event hotspots, or any scenario where you want to highlight the concentration of data points.

**Reference**: [Heatmap](https://maplibre.org/maplibre-style-spec/layers/#heatmap)

## Usage

The *HeatmapLayer* works by aggregating point data into a smooth gradient of colors, where warmer colors represent higher densities.

This layer is typically used with a source that provides point data, such as *GeojsonSource*, but it can also be configured independently using a source prop within the layer itself.

<example id="layers/heatmap" />

## Style customization

You can also configure the appearance and behavior of the layer using the layout and paint options, similar to other layers in LibreGL.

<example id="layers/heatmap-style" />

## Toggle layer visibility

You can programmatically control the visibility of the heatpmap layer on the map using the exposed `toggle()` method.

This method toggles the layer’s visibility by interacting with MapLibre’s `setLayoutProperty()` function.

Behind the scenes, it adjusts the visibility property of the heatpmap layer between `visible` and `none`.

<example id="layers/heatmap-visibility" />

## Rerendering data

The data prop in the *GeojsonSource* is reactive, once the data changes, LibreGL automatically rerenders the layer like a charm, ensuring your map always reflects the latest data, here is an example.

<example id="layers/heatmap-data" />

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
| source | Name of a source description to be used for this layer. | *Optional* [GeoJSONSourceSpecification](https://maplibre.org/maplibre-style-spec/sources/#geojson) \| `string` |
| minzoom | The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. | *Optional* `number` in range `[0, 24]` |
| maxzoom | The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden. | *Optional* `number` in range `[0, 24]` |
| filter | A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The feature-state expression is not supported in filter expressions. | *Optional* [filter](https://maplibre.org/maplibre-style-spec/expressions/) |
| layout | Layout properties for the layer. | *Optional* [HeatmapSpecification['layout']](https://maplibre.org/maplibre-style-spec/layers/#circle-sort-key) |
| paint | Default paint properties for this layer. | *Optional* [HeatmapSpecification['paint']](https://maplibre.org/maplibre-style-spec/layers/#circle-radius) |
