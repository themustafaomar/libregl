<script setup lang="ts">
import { Map, LogoControl } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="4"
    :style
  >
    <LogoControl />
  </Map>
</template>
