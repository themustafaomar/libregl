---
title: Popup
metadata:
  title: Popup
  description: The Popup component allows you to display customizable popups at specific coordinates on the map.
---

The *Popup* component allows you to display customizable popups at specific coordinates on the map.

Popups are useful for showing additional information, such as details about a marker or location, when users click or hover over map elements.

You can position popups relative to map features, configure their content, and control their appearance.

**Reference**: [Popup](https://maplibre.org/maplibre-gl-js/docs/API/classes/Popup)

## Usage

The *Popup* component is highly flexible and can be integrated with markers or placed independently.

You can pass the popup's content as text or HTML and specify its coordinates to anchor it on the map.

<example id="components/popup" />

## API

### Props

The *Popup* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| coordinates | The location of the marker | [MaybeRef\<LngLatLike\>](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/LngLatLike) |
| closeButton | If `true`, a close button will appear in the top right corner of the popup. | *Optional* `boolean` default is `true` |
| closeOnClick | If `true`, the popup will closed when the map is clicked. | *Optional* `boolean` default is `true` |
| closeOnMove | If `true`, the popup will closed when the map moves. | *Optional* `boolean` default is `false` |
| focusAfterOpen | If `true`, the popup will try to focus the first focusable element inside the popup. | *Optional* `boolean` default is `true` |
| anchor | A string indicating the part of the Popup that should be positioned closest to the coordinate set via [Popup#setLngLat](https://maplibre.org/maplibre-gl-js/docs/API/classes/Popup/#setlnglat). Options are `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-left'`, `'top-right'`, `'bottom-left'`, and `'bottom-right'`. If unset the anchor will be dynamically set to ensure the popup falls within the map container with a preference for `'bottom'`. | *Optional* [PositionAnchor](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/PositionAnchor/) |
| offset | A pixel offset applied to the popup's location | *Optional* [Offset](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/Offset) |
| className | Space-separated CSS class names to add to popup container | *Optional* `string` |
| maxWidth | A string that sets the CSS property of the popup's maximum width, eg `'300px'`. To ensure the popup resizes to fit its content, set this property to `'none'`. Available values can be found here: https://developer.mozilla.org/en-US/docs/Web/CSS/max-width | *Optional* `string` default is `240px` |
| subpixelPositioning | If `true`, rounding is disabled for placement of the popup, allowing for subpixel positioning and smoother movement when the popup is translated. | *Optional* `boolean` default is `false` |

### Events

Here's a list of the supported events from Maplibre marker component.

| Name    | Description               | Params |
|---------|---------------------------|------|
| `@open` | **Event** `open` of type [Event](https://maplibre.org/maplibre-gl-js/docs/API/classes/Event) will be fired when the popup is opened manually or programmatically. | - |
| `@close` | **Event** `close` of type [Event](https://maplibre.org/maplibre-gl-js/docs/API/classes/Event) will be fired when the popup is closed manually or programmatically. | - |
