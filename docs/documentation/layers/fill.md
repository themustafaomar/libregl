---
title: FillLayer
metadata:
  title: FillLayer
  description: The FillLayer component enables you to render solid or patterned polygons directly onto your map, making it ideal for visualizing geographic boundaries, regions, or any defined areas based on coordinate data.
---

The *FillLayer* component enables you to render solid or patterned polygons directly onto your map, making it ideal for visualizing geographic boundaries, regions, or any defined areas based on coordinate data.

With a range of customizable paint and layout options, *FillLayer* gives you precise control over fill color, opacity, borders, and patterns, allowing you to easily style polygons to match the unique look and feel of your application.

**Reference**: [Fill](https://maplibre.org/maplibre-style-spec/layers/#fill)

## Usage

The *FillLayer* is often used within a *GeojsonSource* to render polygonal data, but it can also be customized through its paint properties for fine-tuned visual styling.

<example id="layers/fill" />

## Style customization

The *FillLayer* allows you to customize the appearance of the filled areas using various paint properties, here’s an example:

<example id="layers/fill-style" />

## Toggle layer visibility

You can programmatically control the visibility of the fill layer on the map using the exposed `toggle()` method.

This method toggles the layer’s visibility by interacting with MapLibre’s `setLayoutProperty()` function.

Behind the scenes, it adjusts the visibility property of the fill layer between `visible` and `none`.

<example id="layers/fill-visibility" />

## Rerendering data

The data prop in the *GeojsonSource* is reactive, once the data changes, LibreGL automatically rerenders the layer like a charm, ensuring your map always reflects the latest data, here is an example:

<example id="layers/fill-data" />

## API

### Props

The *FillLayer* component's props.

:::info
While an id is typically required for MapLibre layers, the *FillLayer* component automatically generates a unique id if none is provided.
:::

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| id | The id for the source. Must not be used by any existing source.                                                                            | *Optional* `string` |
| metadata | Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'maplibre:'. | *Optional* `Record<string, string>` |
| source | Name of a source description to be used for this layer. | *Optional* [GeoJSONSourceSpecification](https://maplibre.org/maplibre-style-spec/sources/#geojson) or `string` |
| minzoom | The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. | *Optional* `number` in range [0, 24]. |
| maxzoom | The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden. | *Optional* `number` in range [0, 24]. |
| filter | A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The feature-state expression is not supported in filter expressions. | *Optional* [filter](https://maplibre.org/maplibre-style-spec/expressions/) |
| layout | Layout properties for the layer. | *Optional* [FillLayerSpecification['layout']](https://maplibre.org/maplibre-style-spec/layers/#fill-sort-key) |
| paint | Default paint properties for this layer. | *Optional* [FillLayerSpecification['paint']](https://maplibre.org/maplibre-style-spec/layers/#fill-antialias) |