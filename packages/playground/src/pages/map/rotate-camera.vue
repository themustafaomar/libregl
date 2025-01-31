<script setup lang="ts">
import { watch } from 'vue'
import { Map, useMap } from 'libregl'
import { MapEventType, MapLibreEvent } from 'maplibre-gl'

const { mapRef, map, isLoaded } = useMap('map')
watch(isLoaded, (value) => {
  if (!value) return
  rotateCamera(0)
})

function rotateCamera(timestamp: number) {
  // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
  map.value!.rotateTo((timestamp / 100) % 360, { duration: 0 })
  requestAnimationFrame(rotateCamera)
}

const dragend = (e: MapLibreEvent<MapEventType['dragend']>) => {
  console.log(e.target.getCenter())
}
</script>

<template>
  <Map
    ref="mapRef"
    height="100vh"
    width="100%"
    :style="'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'"
    :center="[-82.42588381511524, 23.083166925773156]"
    :zoom="16"
    :pitch="60"
    @dragend="dragend"
  >
  </Map>
</template>
