---
title: RasterDemSource
metadata:
  title: RasterDemSource
  description: The RasterDemSource component is used to provide digital elevation model (DEM) data to your map, which is essential for rendering 3D terrain.
---

The *RasterDemSource* component is used to provide digital elevation model (DEM) data to your map, which is essential for rendering 3D terrain.

This source loads raster DEM tiles that represent elevation data, which can then be applied to visual elements like the [TerrainControl](/docs/controls/terrain) or [HillshadeLayer](/docs/layers/hillshade) to create a 3D representation of the terrain.

**Reference**: [RasterDem](https://maplibre.org/maplibre-style-spec/sources/#raster-dem)

## Usage

The *RasterDemSource* component defines the elevation data for the map by fetching raster DEM tiles.

These tiles contain information about the elevation of each point on the map, which is then used to simulate natural terrain features such as mountains, valleys, and hills in 3D.

You can combine this with other layers to bring an added depth to your map.

Please navigate to [HillshadeLayer](/docs/layers/hillshade#usage) for an example.

## API

### Props

The *RasterDemSource* component's props.

:::info
While an id is typically required for MapLibre sources, the *RasterDemSource* component automatically generates a unique id if none is provided.
:::

| Prop | Description                                                            | Type |
|------|------------------------------------------------------------------------|------|
| id | The id for the source. Must not be used by any existing source.          | *Optional* `string` |
| url | A URL to a TileJSON resource. Supported protocols are `http`: and `https`:. | *Optional* `string` |
| tiles | An array of one or more tile source URLs, as in the TileJSON spec. | *Optional* `array` |
| bounds | An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by MapLibre. | *Optional* `array` default is `-180,-85.051129,180,85.051129` |
| minzoom | Minimum zoom level for which tiles are available, as in the TileJSON spec. | *Optional* `number`. default is `0` |
| maxzoom | Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels. | *Optional* `number`. default is to `22`. |
| tileSize | The minimum visual size to display tiles for this layer. Only configurable for raster layers. | `Optional` `number`. Units in pixels. default is `512` |
| attribution | Contains an attribution to be displayed when the map is shown to a user. | `Optional` `number`. Units in pixels. default is `512` |
| encoding | The encoding used by this source. Mapbox Terrain RGB is used by default. | *Optional* `enum`. Possible values: `terrarium`, `mapbox`, `custom`. default is `mapbox`. |
| redFactor | Value that will be multiplied by the red channel value when decoding. Only used on custom encodings. | *Optional* `number`. default is `1`. |
| blueFactor | Value that will be multiplied by the blue channel value when decoding. Only used on custom encodings. | *Optional* `number`. default is `1`. |
| greenFactor | Value that will be multiplied by the green channel value when decoding. Only used on custom encodings. | *Optional* `number`. default is `1` |
| baseShift | Value that will be added to the encoding mix when decoding. Only used on custom encodings. | *Optional* `number`. default is `0` |
| volatile | A setting to determine whether a source's tiles are cached locally. | *Optional* `boolean`. default is `false`. |