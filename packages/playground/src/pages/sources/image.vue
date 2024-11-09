<script setup lang="ts">
import { ImageSource, RasterLayer } from 'libregl'
import Map from '@/components/Map.vue'
</script>

<template>
  <Map
    :zoom="13"
    :center="[-76.54, 39.18]"
  >
    <ImageSource
      :url="'https://pbs.twimg.com/media/FAd0QGyXsAsltUo.jpg'"
      :coordinates="[
        [-76.54, 39.18], [-76.52, 39.18],
        [-76.52, 39.17], [-76.54, 39.17]
      ]"
    >
      <RasterLayer />
    </ImageSource>
  </Map>
</template>
