<script setup lang="ts">
import { Map, VectorSource, LineLayer } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
const url = `https://api.maptiler.com/tiles/contours/tiles.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    width="100%"
    height="400px"
    :zoom="13"
    :center="[-122.447303, 37.753574]"
    :style
  >
    <VectorSource :url>
      <LineLayer
        :layout="{
          'line-cap': 'round',
          'line-join': 'round',
        }"
        :paint="{
          'line-color': '#ff69b4',
          'line-width': 1,
        }"
        source-layer="contour"
      >
      </LineLayer>
    </VectorSource>
  </Map>
</template>
