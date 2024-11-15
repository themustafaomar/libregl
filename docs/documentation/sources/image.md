---
title: ImageSource
metadata:
  title: ImageSource
  description: The ImageSource component allows you to display a single, non-tiled image on the map.
---

The *ImageSource* component allows you to display a single, non-tiled image on the map.

This is useful for overlaying static images such as logos, maps, scanned documents, or any custom imagery on specific coordinates.

The *ImageSource* can be positioned and stretched to fit specific bounds on the map, making it ideal for visualizing georeferenced images.

**Reference**: [Image](https://maplibre.org/maplibre-style-spec/sources/#image)

## Usage

The *ImageSource* requires a URL to the image and a set of coordinates (bounds) that define the area where the image will be displayed on the map.

You can use this component to place custom imagery within a specified region of the map and combine it with other layers for a rich visual experience.

Here is an example in combination with [RasterLayer](/docs/layers/raster).

<example id="sources/image" />

## API

### Props

The *ImageSource* component's props.

:::info
While an id is typically required for MapLibre sources, the *ImageSource* component automatically generates a unique id if none is provided.
:::

| Prop | Description                                                            | Type |
|------|------------------------------------------------------------------------|------|
| id | The id for the source. Must not be used by any existing source.          | *Optional* `string` |
| url | URL that points to an image. | *Required* `string` |
| coordinates | Corners of image specified in longitude, latitude pairs. | *Required* [array](https://maplibre.org/maplibre-style-spec/types/#array) |