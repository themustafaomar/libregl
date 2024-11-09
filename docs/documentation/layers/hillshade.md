---
title: HillshadeLayer
metadata:
  title: HillshadeLayer
  description: The HillshadeLayer component is used to render terrain data on the map as a shaded relief layer, giving a 3D appearance to landscapes.
---

The *HillshadeLayer* component is used to render terrain data on the map as a shaded relief layer, giving a 3D appearance to landscapes.

It simulates light and shadow to enhance the visibility of terrain features such as mountains, valleys, and hills.

This is particularly useful in geographic, topographic, or outdoor applications where understanding terrain elevation and relief is critical.

**Reference**: [Hillshade](https://maplibre.org/maplibre-style-spec/layers/#heatmap)

## Usage

The *HillshadeLayer* can be added to the map by specifying a raster-dem source, which provides the digital elevation model (DEM) data.

<example id="layers/hillshade" />

## Style customization

You can also configure the appearance and behavior of the layer using the layout and paint options, similar to other layers in LibreGL.

<example id="layers/hillshade-style" />

## Toggle layer visibility

You can programmatically control the visibility of the hillshade layer on the map using the exposed `toggle()` method.

This method toggles the layer’s visibility by interacting with MapLibre’s `setLayoutProperty()` function.

Behind the scenes, it adjusts the visibility property of the hillshade layer between `visible` and `none`.

<example id="layers/hillshade-visibility" />

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
| layout | Layout properties for the layer. | *Optional* [HillshadeSpecification['layout']](https://maplibre.org/maplibre-style-spec/layers/#visibility_8) |
| paint | Default paint properties for this layer. | *Optional* [HillshadeSpecification['paint']](https://maplibre.org/maplibre-style-spec/layers/#hillshade-illumination-direction) |
