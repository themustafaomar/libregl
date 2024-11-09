---
title: VectorSource
metadata:
  title: VectorSource
  description: The VectorSource allows you to add vector tile data to your map, which is essential for efficiently rendering large datasets such as streets, terrain, or boundaries.
---

The *VectorSource* allows you to add vector tile data to your map, which is essential for efficiently rendering large datasets such as streets, terrain, or boundaries.

Vector tiles are pre-rendered at various zoom levels, enabling smooth and responsive map interactions, even with complex data.

**Reference**: [Vector](https://maplibre.org/maplibre-style-spec/sources/#vector)

## Usage

The *VectorSource* component is used to define the source of vector tiles, typically provided through a URL pointing to a tile server.

You can use this component in conjunction with various layer types, such as *LineLayer*, *FillLayer*, or *SymbolLayer*, to style and display the vector data on your map.

<example id="sources/vector" />

## API

### Props

The *CanvasSource* component's props.

:::info
While an id is typically required for MapLibre sources, the *VectorSource* component automatically generates a unique id if none is provided.
:::

| Prop | Description                                                            | Type |
|------|------------------------------------------------------------------------|------|
| id | The id for the source. Must not be used by any existing source. | *Optional* `string` |
| url | A URL to a TileJSON resource. Supported protocols are `http`: and `https`:. | *Optional* `string` |
| tiles | An array of one or more tile source URLs, as in the TileJSON spec. | *Optional* `array` |
| bounds | An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by MapLibre. | *Optional* `array` default is `-180,-85.051129,180,85.051129` |
| scheme | Influences the y direction of the tile coordinates. The global-mercator (aka Spherical Mercator) profile is assumed. | `Optional` `number`. Possible values `xyz`, `tms`. Defaults to `xyz`. |
| minzoom | Minimum zoom level for which tiles are available, as in the TileJSON spec. | *Optional* `number`. default is `0` |
| maxzoom | Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels. | *Optional* `number`. default is to `22`. |
| attribution | Contains an attribution to be displayed when the map is shown to a user. | `Optional` `string` |
| promoteId | A property to use as a feature id (for feature state). Either a property name, or an object of the form `{<sourceLayer>: <propertyName>}`. If specified as a string for a vector tile source, the same property is used across all its source layers. | `Optional` [promoteId](https://maplibre.org/maplibre-style-spec/types) |
| volatile | A setting to determine whether a source's tiles are cached locally. | *Optional* `boolean`. default is `false`. |