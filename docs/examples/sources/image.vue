<script setup lang="ts">
import { Map, ImageSource, RasterLayer } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="4"
    :style
  >
    <ImageSource
      :url="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZGFg60stqjUkvQMY0AXaXUg1lTQj8dIygQ&s'"
      :coordinates="[
        [15.0, 50.0], [21.0, 50.0],
        [21.0, 46.0], [15.0, 46.0],
      ]"
    >
      <RasterLayer />
    </ImageSource>
  </Map>
</template>