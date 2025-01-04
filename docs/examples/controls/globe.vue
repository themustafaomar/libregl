<script setup lang="ts">
import { Map, GlobeControl } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    @load="({ target }) => target.setProjection({ type: 'globe' })"
    height="400px"
    :center="[18, 48]"
    :zoom="0.75"
    :style
  >
    <GlobeControl />
  </Map>
</template>
