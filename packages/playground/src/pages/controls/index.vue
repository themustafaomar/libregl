<script setup lang="ts">
import { ref } from 'vue'
import { Map, GlobeControl } from 'libregl'

const mapRef = ref()
</script>

<template>
  <Map
    ref="mapRef"
    projection="globe"
    height="100vh"
    width="100%"
    :style="'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'"
  >
    <GlobeControl position="top-right" />
  </Map>
</template>
