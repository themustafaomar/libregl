<script setup lang="ts">
import { Map } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    width="100%"
    height="400px"
    :center="[95.899147, 18.088694]"
    :zoom="5"
    :style
  >
  </Map>
</template>
