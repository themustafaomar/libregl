---
title: FullscreenControl
metadata:
  title: FullscreenControl
  description: The FullscreenControl component provides an easy way to enable fullscreen mode for the map.
---

The *FullscreenControl* component provides an easy way to enable fullscreen mode for the map.

This control adds a button to the map interface, allowing users to toggle fullscreen mode, which enhances the user experience by expanding the map to cover the entire screen.

This is especially useful for applications that require detailed map interaction or large-scale data visualization.

**Reference**: [FullscreenControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/FullscreenControl)

## Usage

Adding the *FullscreenControl* to your map is straightforward, and it automatically enables fullscreen functionality for the map container.

<example id="controls/fullscreen" />

## Using container

You can also customize the fullscreen wrapper element.

<example id="controls/fullscreen-container" />

## API

### Props

The *FullscreenControl* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| container | container is the [compatible DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen#Compatible_elements) which should be made full screen. By default, the map container element will be made full screen. | *Optional* `HTMLElement` |
