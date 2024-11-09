<script setup lang="ts">
import { Map, ScaleControl } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    width="100%"
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
    <ScaleControl />
  </Map>
</template>
