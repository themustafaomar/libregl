---
title: RasterLayer
metadata:
  title: RasterLayer
  description: The RasterLayer component is used to display raster imagery on the map, such as satellite imagery, weather maps, or terrain layers.
---

The *RasterLayer* component is used to display raster imagery on the map, such as satellite imagery, weather maps, or terrain layers.

It renders images as tiles and can be styled with various paint properties to adjust opacity, brightness, and contrast.

**Reference**: [Raster](https://maplibre.org/maplibre-style-spec/layers/#raster)

## Usage

The *RasterLayer* works with sources like *RasterSource* and *VideoSource* that provide tiled image data.

<example id="layers/raster" />

## Toggle layer visibility

You can programmatically control the visibility of the heatpmap layer on the map using the exposed `toggle()` method.

This method toggles the layer’s visibility by interacting with MapLibre’s `setLayoutProperty()` function.

Behind the scenes, it adjusts the visibility property of the heatpmap layer between `visible` and `none`.

<example id="layers/raster-visibility" />

## API

### Props

The *Raster* component's props.

:::info
While an id is typically required for MapLibre layers, the *RasterLayer* component automatically generates a unique id if none is provided.
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