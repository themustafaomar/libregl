---
title: ScaleControl
metadata:
  title: ScaleControl
  description: The ScaleControl component displays a scale bar on the map, providing users with a visual representation of distance.
---

The *ScaleControl* component displays a scale bar on the map, providing users with a visual representation of distance.

It adjusts dynamically as users zoom in and out, giving them a clear sense of scale in relation to the map’s content.

This is especially useful in applications where users need to gauge distances, such as in geographical or navigational contexts.

**Reference**: [ScaleControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/ScaleControl)

## Usage

The *ScaleControl* is easy to add to your map and provides an automatic scale bar that adjusts based on the zoom level and the map's current viewport.

You can customize its position to suit your application's layout.

<example id="controls/scale" />

## API

### Props

The *ScaleControl* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| position | A position defintion for the control to be placed, can be in one of the corners of the map. When two or more controls are places in the same location they are stacked toward the center of the map. | *Optional* [ControlPosition](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/ControlPosition) |
| maxWidth | The maximum length of the scale control in pixels. | *Optional* `number` default is `100` |
| unit | Unit of the distance (`'imperial'`, `'metric'` or `'nautical'`). | *Optional* [Unit](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/Unit) default is `metric` |
