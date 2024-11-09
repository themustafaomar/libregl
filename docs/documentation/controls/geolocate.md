---
title: GeolocateControl
metadata:
  title: GeolocateControl
  description: The GeolocateControl allows users to center the map on their current location.
---

The *GeolocateControl* allows users to center the map on their current location.

It adds a button to the map interface, which when clicked, uses the browser's geolocation API to obtain the user's position and pans the map to that location.

This control is particularly useful for applications that involve user-specific location data, such as local search, tracking, or navigation.

**Reference**: [GeolocateControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/GeolocateControl)

## Usage

The *GeolocateControl* is simple to integrate, and it provides an intuitive way for users to interact with the map based on their real-time geographic location.

You can customize its position on the map, and the control will automatically zoom and center the map once the user's location is found.

<example id="controls/geolocate" />

## API

### Props

The *GeolocateControl* component's props.

| Prop  | Description                                                                                                                                | Type |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|------|
| position | A position defintion for the control to be placed, can be in one of the corners of the map. When two or more controls are places in the same location they are stacked toward the center of the map. | *Optional* [ControlPosition](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/ControlPosition) |
| positionOptions | A Geolocation API [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) object. | *Optional* `{ enableHighAccuracy: false, timeout: 6000 }` |
| fitBoundsOptions | A options object to use when the map is panned and zoomed to the user's location. The default is to use a `maxZoom` of 15 to limit how far the map will zoom in for very accurate locations. | *Optional* [FitBoundsOptions](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/FitBoundsOptions) default is `{ maxZoom: 15 }` |
| trackUserLocation | If `true` the `GeolocateControl` becomes a toggle button and when active the map will receive updates to the user's location as it changes. | *Optional* `boolean` default is `false` |
| showAccuracyCircle | By default, if `showUserLocation` is `true`, a transparent circle will be drawn around the user location indicating the accuracy (95% confidence level) of the user's location. Set to `false` to disable. Always disabled when `showUserLocation` is `false`. | *Optional* `boolean` default is `true` |
| showUserLocation | By default a dot will be shown on the map at the user's location. Set to `false` to disable. | *Optional* `boolean` default is `true` |

### Events

The *GeolocateControl* component's events.

| Name  | Description               | Params |
|-------|---------------------------|--------|
| `@trackuserlocationend` | **Event** `trackuserlocationend` of type [Event](https://maplibre.org/maplibre-gl-js/docs/API/classes/Event) will be fired when the `GeolocateControl` changes to the background state, which happens when a user changes the camera during an active position lock. This only applies when `trackUserLocation` is `true`. In the background state, the dot on the map will update with location updates but the camera will not. | - |
| `@trackuserlocationstart` | **Event** `trackuserlocationstart` will be fired when the GeolocateControl changes to the active lock state, which happens either upon first obtaining a successful Geolocation API position for the user (a geolocate event will follow), or the user clicks the geolocate button when in the background state which uses the last known position to recenter the map and enter active lock state (no geolocate event will follow unless the users's location changes). | - |
| `@userlocationlostfocus` | **Event** `userlocationlostfocus` will be fired when the GeolocateControl changes to the background state, which happens when a user changes the camera during an active position lock. This only applies when trackUserLocation is true. In the background state, the dot on the map will update with location updates but the camera will not. | - |
| `@userlocationfocus` | **Event** `userlocationfocus` will be fired when the GeolocateControl changes to the active lock state, which happens upon the user clicks the geolocate button when in the background state which uses the last known position to recenter the map and enter active lock state. | - |
| `@geolocate` | **Event** `geolocate` will be fired on each Geolocation API position update which returned as success. `data` - The returned [Position](https://developer.mozilla.org/en-US/docs/Web/API/Position) object from the callback in [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) or [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition). | - |
| `@error` | **Event** `error` will be fired on each Geolocation API position update which returned as an error. `data` - The returned [PositionError](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) object from the callback in [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) or [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition). | - |
| `@outofmaxbounds` | **Event** `outofmaxbounds` will be fired on each Geolocation API position update which returned as success but user position is out of map `maxBounds`. `data` - The returned [Position](https://developer.mozilla.org/en-US/docs/Web/API/Position) object from the callback in [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) or [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition). | - |



