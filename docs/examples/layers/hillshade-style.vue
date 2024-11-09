<script setup lang="ts">
import { Map, HillshadeLayer } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
const tiles = [`https://api.mapbox.com/raster/v1/mapbox.mapbox-terrain-dem-v1/{z}/{x}/{y}.webp?sku=101cAEVUT94zr&access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`]
</script>

<template>
  <Map
    height="400px"
    :center="[10, 47]"
    :zoom="5.5"
    :style
  >
    <HillshadeLayer
      before-id="City labels"
      :source="{
        type: 'raster-dem',
        tiles,
      }"
      :paint="{
        'hillshade-highlight-color': '#e11d48',
        'hillshade-shadow-color': '#0f172a',
      }"
      :layout="{
        // visibility: 'none',
      }"
    >
    </HillshadeLayer>
  </Map>
</template>
