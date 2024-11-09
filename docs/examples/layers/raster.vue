<script setup lang="ts">
import { Map, VideoSource, RasterLayer } from 'libregl'

const style = `https://api.maptiler.com/maps/satellite/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    height="400px"
    :center="[-122.514426, 37.562984]"
    :zoom="16"
    :bearing="-96"
    :style
  >
    <VideoSource
      :urls="[
        'https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4',
        'https://static-assets.mapbox.com/mapbox-gl-js/drone.webm',
      ]"
      :coordinates="[
        [-122.51596391201019, 37.56238816766053], [-122.51467645168304, 37.56410183312965],
        [-122.51309394836426, 37.563391708549425], [-122.51423120498657, 37.56161849366671],
      ]"
    >
      <RasterLayer />
    </VideoSource>
  </Map>
</template>
