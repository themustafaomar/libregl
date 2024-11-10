<script setup lang="ts">
import { MapLibreEvent } from 'maplibre-gl'
import {
  Map,
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
  ScaleControl,
  AttributionControl,
} from 'libregl'

// Map events
const onLoaded = (event: MapLibreEvent) => {
  console.log(event)
}

const onMapZoom = (event: MapLibreEvent) => {
  console.log(event)
}

const onBoxZoom = (event: MapLibreEvent<WheelEvent>) => {
  console.log(event)
}

// Marker draggable
const onDragStart = (event: any) => {
  console.log('onDragStart()', event)
}

const onDrag = (event: any) => {
  console.log('onDrag()', event)
}

const onDragEnd = (event: any) => {
  console.log('onDragEnd()', event)
}

// Geolocate Control
const onGeoLocate = () => {
  console.log('@geolocate')
}

const onTrackUserLocationEnd = () => {
  console.log('@trackuserlocationend')
}
</script>

<template>
  <Map
    @load="onLoaded"
    @zoomstart="onMapZoom"
    @zoom="onMapZoom"
    @zoomend="onMapZoom"
    @boxzoomstart="onBoxZoom"
    @boxzoomend="onBoxZoom"
    @boxzoomcancel="onBoxZoom"
    height="100vh"
    width="100%"
    :zoom="4"
    :style="'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'"
    :attribution-control="false"
  >
    <AttributionControl
      position="bottom-right"
      :compact="false"
    >
    </AttributionControl>

    <NavigationControl
      position="top-right"
      visualize-pitch
      show-compass
      show-zoom
    >
    </NavigationControl>

    <GeolocateControl
      position="top-right"
      :position-options="{ enableHighAccuracy: true }"
      @geolocate="onGeoLocate"
      @trackuserlocationend="onTrackUserLocationEnd"
    >
    </GeolocateControl>

    <ScaleControl ref="scaleRef" position="bottom-left" unit="metric" />

    <Marker
      :coordinates="[30.834688, 29.294592]"
      :on-drag-start
      :on-drag
      :on-drag-end
      :draggable="false"
    >
      <Popup
        :offset="25"
        text="Construction on the Washington Monument began in 1848."
      />
    </Marker>
  </Map>
</template>
