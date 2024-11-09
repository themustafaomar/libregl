---
title: GeojsonSource
metadata:
  title: GeojsonSource
  description: The GeojsonSource component enables you to add GeoJSON data directly to your map, making it easy to visualize complex spatial data like points, lines, and polygons.
---

The *GeojsonSource* component enables you to add GeoJSON data directly to your map, making it easy to visualize complex spatial data like points, lines, and polygons.

This component used as the data source for various layer types, such as *FillLayer*, *LineLayer*, and *CircleLayer* allowing you to render geographic features with customizable styles and properties.

## Usage

The *GeojsonSource* accepts GeoJSON data as a prop, which can either be a static dataset or a reactive prop that updates in real-time.

Here’s an example of using *GeojsonSource* with *FillLayer* and *LineLayer* to connect two points with line.

<example id="sources/geojson" />

## API

### Props

The *GeojsonSource* component's props.

:::info
While an id is typically required for MapLibre sources, the *GeojsonSource* component automatically generates a unique id if none is provided.
:::

| Prop | Description                                                            | Type |
|------|------------------------------------------------------------------------|------|
| id | The id for the source. Must not be used by any existing source.          | *Optional* `string` |
| data | A URL to a GeoJSON file, or inline GeoJSON.                            | *Required* `GeoJSON.GeoJSON` \| `string` |
| maxzoom | Maximum zoom level at which to create vector tiles (higher means greater detail at high zoom levels). | *Optional* [number](https://maplibre.org/maplibre-style-spec/types/#number), default is `18`. |
| attribution | Contains an attribution to be displayed when the map is shown to a user. | *Optional* string. |
| buffer | Size of the tile buffer on each side. A value of 0 produces no buffer. A value of 512 produces a buffer as wide as the tile itself. Larger values produce fewer rendering artifacts near tile edges and slower performance. | *Optional* [number](https://maplibre.org/maplibre-style-spec/types/#number) in range `[0, 512]` default is to `128`. |
| filter | An expression for filtering features prior to processing them for rendering. | *Optional* |
| tolerance | Douglas-Peucker simplification tolerance (higher means simpler geometries and faster performance). | *Optional* [number](https://maplibre.org/maplibre-style-spec/types/#number), default is `0.375`. |
| cluster | If the data is a collection of point features, setting this to true clusters the points by radius into groups. Cluster groups become new Point features in the source with additional properties, [learn more](https://maplibre.org/maplibre-style-spec/sources/#cluster). | *Optional* `boolean`. default is `false`. |
| clusterRadius | Radius of each cluster if clustering is enabled. A value of 512 indicates a radius equal to the width of a tile. | *Optional* [number](https://maplibre.org/maplibre-style-spec/types/#number) in range `[0, ∞)`. default is `50`. |
| clusterMaxZoom | Max zoom on which to cluster points if clustering is enabled. Defaults to one zoom less than maxzoom (so that last zoom features are not clustered). Clusters are re-evaluated at integer zoom levels so setting clusterMaxZoom to 14 means the clusters will be displayed until z15. | *Optional* [number](https://maplibre.org/maplibre-style-spec/types/#number). |
| clusterMinPoints | Minimum number of points necessary to form a cluster if clustering is enabled. Defaults to 2. | *Optional* [number](https://maplibre.org/maplibre-style-spec/types/#number). |
| clusterProperties | An object defining custom properties on the generated clusters if clustering is enabled, aggregating values from clustered points. Has the form {"property_name": [operator, map_expression]} [learn more](https://maplibre.org/maplibre-style-spec/sources/#clusterproperties). | *Optional* |
| lineMetrics | Whether to calculate line distance metrics. This is required for line layers that specify line-gradient values. | *Optional* `boolean` default is `false`. |
| generateId | Whether to generate ids for the geojson features. When enabled, the `feature.id` property will be auto assigned based on its index in the `features` array, over-writing any previous values. | *Optional* `boolean`, default is `false`. |
| promoteId | A property to use as a feature id (for feature state). Either a property name, or an object of the form `{<sourceLayer>: <propertyName>}`. | *Optional* `boolean`, default is `false`. |
