<script setup lang="ts">
import { shallowRef } from 'vue'
import { Map, Marker } from 'libregl'
import { LngLatLike } from 'maplibre-gl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const coordinates = shallowRef<LngLatLike>([19.834688, 50.294592])
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3.5"
    :style
  >
    <Marker v-model:coordinates="coordinates" draggable />
  </Map>
  <div class="mt-5">Coordinates: {{ coordinates }}</div>
</template>
