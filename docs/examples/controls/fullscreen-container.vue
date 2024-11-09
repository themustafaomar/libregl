<script setup lang="ts">
import { Map, FullscreenControl } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <div class="container-body">
    <Map
      height="400px"
      :center="[18, 48]"
      :zoom="3"
      :style
      >
      <FullscreenControl container="container-body" />
    </Map>
  </div>
</template>
