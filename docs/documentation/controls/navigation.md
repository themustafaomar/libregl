---
title: NavigationControl
metadata:
  title: NavigationControl
  description: The NavigationControl component adds zoom and rotation controls to the map, providing users with an intuitive way to interact with the map's view.
---

The *NavigationControl* component adds zoom and rotation controls to the map, providing users with an intuitive way to interact with the map's view.

These controls are typically displayed as buttons, allowing users to zoom in, zoom out, and rotate the map without needing to use gestures or keyboard shortcuts.

**Reference**: [NavigationControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/NavigationControl)

## Usage

Adding the *NavigationControl* to your map is straightforward, and you can customize its position on the map for optimal user experience.

This control enhances map navigation by making it more accessible, especially for users who prefer buttons over gestures or mouse interactions.

<example id="controls/navigation" />

## API

### Props

The *NavigationControl* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| position | A position defintion for the control to be placed, can be in one of the corners of the map. When two or more controls are places in the same location they are stacked toward the center of the map. | *Optional* [ControlPosition](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/ControlPosition) |
| showCompass | If `true` the compass button is included. | *Optional* `boolean` default is `true` |
| showZoom | If `true` the zoom-in and zoom-out buttons are included. | *Optional* `boolean` default is `true` |
| visualizePitch | If `true` the pitch is visualized by rotating X-axis of compass. | *Optional* `boolean` default is `false` |
