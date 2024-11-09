---
title: VideoSource
metadata:
  title: VideoSource
  description: The VideoSource component enables you to add a looping video overlay to your map.
---

The *VideoSource* component enables you to add a looping video overlay to your map.

This can be useful for visualizing time-based data or enhancing the map with live, pre-recorded, or animated video content, such as drone footage, weather maps, or interactive backgrounds.

## Usage

The *VideoSource* requires a video URL (or multiple URLs for fallback) and a set of coordinates defining the video’s bounds on the map. The video will play automatically within the specified bounds, adapting to the map’s position and zoom levels.

Please navigate to [RasterLayer](/docs/layers/raster#usage) for an example.

## API

### Props

The *VideoSource* component's props.

:::info
While an id is typically required for MapLibre sources, the *VideoSource* component automatically generates a unique id if none is provided.
:::

| Prop | Description                                                            | Type |
|------|------------------------------------------------------------------------|------|
| id | The id for the source. Must not be used by any existing source.          | *Optional* `string` |
| urls | URLs to video content in order of preferred format. | *Required* [array](https://maplibre.org/maplibre-style-spec/types/#array) |
| coordinates | Corners of video specified in longitude, latitude pairs. | *Required* [array](https://maplibre.org/maplibre-style-spec/types/#array) |