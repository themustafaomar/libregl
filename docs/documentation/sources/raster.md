---
title: RasterSource
metadata:
  title: RasterSource
  description: The RasterSource component is used to add raster image tiles to your map.
---

The *RasterSource* component is used to add raster image tiles to your map.

These raster tiles can be any image data—satellite imagery, aerial photographs, scanned maps, or custom image tiles—that are rendered on the map as a series of grid-based tiles.

This source is ideal for displaying visually rich imagery or backgrounds that don't require vector data.

**Reference**: [Raster](https://maplibre.org/maplibre-style-spec/sources/#raster)

## Usage

The *RasterSource* component loads image tiles from a specified URL template and displays them across the map based on the current zoom level and bounds.

Each tile is a square image that fits within the tile grid at the given zoom level.

The *RasterSource* works well in conjunction with other layers and controls, such as the *RasterLayer*, to display detailed raster images.

Please navigate to [RasterLayer](/docs/layers/raster#usage) for an example.

## API

### Props

The *RasterSource* component's props.

:::info
While an id is typically required for MapLibre sources, the *RasterDemSource* component automatically generates a unique id if none is provided.
:::

| Prop | Description                                                            | Type |
|------|------------------------------------------------------------------------|------|
| id | The id for the source. Must not be used by any existing source. | *Optional* `string` |
| url | A URL to a TileJSON resource. Supported protocols are `http`: and `https`:. | *Optional* `string` |
| tiles | An array of one or more tile source URLs, as in the TileJSON spec. | *Optional* `array` |
| bounds | An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by MapLibre. | *Optional* `array` default is `-180,-85.051129,180,85.051129` |
| minzoom | Minimum zoom level for which tiles are available, as in the TileJSON spec. | *Optional* `number`. default is `0` |
| maxzoom | Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels. | *Optional* `number`. default is to `22`. |
| tileSize | The minimum visual size to display tiles for this layer. Only configurable for raster layers. | `Optional` `number`. Units in pixels. default is `512` |
| scheme | Influences the y direction of the tile coordinates. The global-mercator (aka Spherical Mercator) profile is assumed. | `Optional` `number`. Possible values `xyz`, `tms`. Defaults to `xyz`. |
| attribution | Contains an attribution to be displayed when the map is shown to a user. | `Optional` `number`. Units in pixels. default is `512` |
| volatile | A setting to determine whether a source's tiles are cached locally. | *Optional* `boolean`. default is `false`. |