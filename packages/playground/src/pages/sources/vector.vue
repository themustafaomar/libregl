<script setup lang="ts">
import { VectorSource, LineLayer } from 'libregl'
import Map from '@/components/Map.vue'

const TILES = `https://api.maptiler.com/tiles/contours/tiles.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    :zoom="13"
    :center="[-122.447303, 37.753574]"
  >
    <VectorSource :url="TILES">
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
