---
title: FillExtrusionLayer
metadata:
  title: FillExtrusionLayer
  description: The FillExtrusionLayer component adds 3D building-like structures to the map by extruding polygons to give them height.
---

The *FillExtrusionLayer* component adds 3D building-like structures to the map by extruding polygons to give them height.

This is particularly useful for visualizing cityscapes, building heights, or any geographic data that involves elevation and volume.

The layer provides depth to otherwise flat polygons, making the map more interactive and visually rich.

**Reference**: [FillExtrusion](https://maplibre.org/maplibre-style-spec/layers/#fill-extrusion)

## Usage

The *FillExtrusionLayer* requires a source that contains polygon data, such as a GeojsonSource.

You can customize the layer's appearance with the paint options to control the color, opacity, and height of the extrusions.

<example id="layers/fill-extrusion" />

## Style customization

You can also configure the appearance and behavior of the layer using the layout and paint options, similar to other layers in LibreGL.

In this example we'll customize the built-in building layer used in Maptiler's tiles source, here is an example:

<example id="layers/fill-extrusion-style" />

<!-- ## Style customization

You can also configure the appearance and behavior of the layer using the layout and paint options, similar to other layers in LibreGL.

<example id="layers/hillshade-style" />

## Toggle layer visibility

You can programmatically control the visibility of the hillshade layer on the map using the exposed `toggle()` method.

This method toggles the layer’s visibility by interacting with MapLibre’s `setLayoutProperty()` function.

Behind the scenes, it adjusts the visibility property of the hillshade layer between `visible` and `none`.

<example id="layers/hillshade-visibility" /> -->

## API

### Props

The *HillshadeLayer* component's props.

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
| filter | A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The feature-state expression is not supported in filter expressions. | *Optional* [filter](https://maplibre.org/maplibre-style-spec/expressions) |
| layout | Layout properties for the layer. | *Optional* [HillshadeSpecification['layout']](https://maplibre.org/maplibre-style-spec/layers/#circle-sort-key) |
| paint | Default paint properties for this layer. | *Optional* [HillshadeSpecification['paint']](https://maplibre.org/maplibre-style-spec/layers/#circle-radius) |
