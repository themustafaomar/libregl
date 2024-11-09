---
title: CanvasSource
metadata:
  title: CanvasSource
  description: The CanvasSource component allows you to use an HTML canvas element as a dynamic map source.
---

The *CanvasSource* component allows you to use an HTML `<canvas>` element as a dynamic map source.

This enables the integration of custom, real-time rendered graphics or animations directly onto your map.

The *CanvasSource* is particularly useful for applications that require custom data visualizations, animated overlays, or interactive elements that<br>update in real-time.

## Usage

To use *CanvasSource*, you need to provide a reference to a `<canvas>` element and specify its dimensions and coordinate bounds, here’s an example with [RasterLayer](/docs/layers/raster).

<example id="sources/canvas" />

## API

### Props

The *CanvasSource* component's props.

:::info
While an id is typically required for MapLibre sources, the *CanvasSource* component automatically generates a unique id if none is provided.
:::

| Prop | Description                                                            | Type |
|------|------------------------------------------------------------------------|------|
| id | The id for the source. Must not be used by any existing source.          | *Optional* `string` |
| coordinates | Four geographical coordinates denoting where to place the corners of the canvas, specified in `[longitude, latitude]` pairs. | *Required* `Array<[number, number], [number, number], [number, number], [number, number]>` |
| animate | Whether the canvas source is animated. If the canvas is static (i.e. pixels do not need to be re-read on every frame), `animate` should be set to `false` to improve performance. | *Optional* `boolean` default is `true` |
| canvas | Canvas source from which to read pixels. Can be a string representing the ID of the canvas element, or the `HTMLCanvasElement` itself. | *Optional* `string \| HTMLCanvasElement` |