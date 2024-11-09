---
title: SymbolLayer
metadata:
  title: SymbolLayer
  description: The SymbolLayer component is designed to display icons and text on the map at specific locations.
---

The *SymbolLayer* component is designed to display icons and text on the map at specific locations.

It allows you to add markers, labels, or custom symbols using various layout and paint properties to control their appearance and behavior.

This layer is especially useful for adding annotations, labels for points of interest, or custom icons to enhance the map’s interactivity.

**Reference**: [Symbol](https://maplibre.org/maplibre-style-spec/layers/#symbol)

## Usage

The *SymbolLayer* is typically used with a source like *GeojsonSource* that contains point data.

<example id="layers/symbol" />

## Style customization

You can customize the layout properties to control how icons and text are rendered on the map, including their size, color, placement, and rotation.

In the following example we're gonna be removing the text of the symbol, reduce the icon size and reduce the opacity.

<example id="layers/symbol-style" />

## API

### Props

The *Symbol* component's props.

:::info
While an id is typically required for MapLibre layers, the *SymbolLayer* component automatically generates a unique id if none is provided.
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
