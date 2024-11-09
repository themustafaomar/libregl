---
title: TerrainControl
metadata:
  title: TerrainControl
  description: The TerrainControl component allows you to add 3D terrain visualization to your map, giving it a realistic, elevated appearance based on digital elevation data.
---

The *TerrainControl* component allows you to add 3D terrain visualization to your map, giving it a realistic, elevated appearance based on digital elevation data.

By applying a terrain source, this control transforms flat maps into 3D landscapes, adding depth and texture to terrain such as mountains, valleys, and hills.

This enhances the map's visual experience and provides a more immersive way to interact with geographical features.

**Reference**: [TerrainControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/ScaleControl)

## Usage

The *TerrainControl* works by using a raster DEM (Digital Elevation Model) source, which provides elevation data for rendering 3D terrain.

You can easily integrate this into your map, and adjust the exaggeration to emphasize the height of terrain features.

<example id="controls/terrain" />

## API

### Props

The *ScaleControl* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| position | A position defintion for the control to be placed, can be in one of the corners of the map. When two or more controls are places in the same location they are stacked toward the center of the map. | *Optional* [ControlPosition](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/ControlPosition) |
| source | The source for the terrain data. | *Required* `string` |
| exaggeration | The `exaggeration` of the terrain - how high it will look. | *Optional* `number` in range [0, ∞), default is `1` |
