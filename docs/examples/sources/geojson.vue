<script setup lang="ts">
import { Map, GeojsonSource, CircleLayer, LineLayer } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const circle: GeoJSON.GeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: { type: 'Point', coordinates: [18, 48] },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: { type: 'Point', coordinates: [10.4515, 51.1657] },
    },
  ],
}

const lines: GeoJSON.GeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: { type: 'LineString', coordinates: [[18, 48], [10.4515, 51.1657]] },
    },
  ],
}
</script>

<template>
  <Map
    width="100%"
    height="400px"
    :center="[18, 48]"
    :zoom="4"
    :style
  >
    <GeojsonSource :data="circle">
      <CircleLayer :paint="{
        'circle-color': '#f00',
        'circle-radius': 10,
        'circle-stroke-opacity': 0.8,
        'circle-stroke-width': 1
      }">
      </CircleLayer>
    </GeojsonSource>

    <GeojsonSource :data="lines">
      <LineLayer :paint="{ 'line-color': '#f00' }" />
    </GeojsonSource>
  </Map>
</template>
