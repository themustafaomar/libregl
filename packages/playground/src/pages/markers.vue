<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { Map, Marker, Popup } from 'libregl'
import { LngLatLike } from 'maplibre-gl'

const onDragStart = (event: any) => {
  console.log('onDragStart()', event)
}

const onDrag = (event: any) => {
  console.log('onDrag()', event)
}

const onDragEnd = (event: any) => {
  console.log('onDragEnd()', event)
}

const coordinates = shallowRef<LngLatLike>([30.834688, 29.294592])
const setCoordinates = () => {
  coordinates.value = [31, 27]
}

const showMarker = ref(true)
const markerRef = ref()
const controlMarker = () => {
  markerRef.value.removeMarker()
}
const toggleMarker = () => {
  showMarker.value = !showMarker.value
}

// setTimeout(() => {
//   coordinates.value = [33.834688, 25.294592]
// }, 1500)
</script>

<template>
  Coordinates: {{ coordinates }}
  <Map
    height="100vh"
    width="100%"
    :center="[35.5, 29.6]"
    :zoom="3"
    :style="'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'"
  >
    <!-- <Marker
      ref="markerRef"
      v-model="showMarker"
      :coordinates="coordinates"
      :on-drag-start
      :on-drag
      :on-drag-end
      draggable
    >
      <Popup :offset="25" text="Construction on the Washington Monument began in 1848." />
    </Marker> -->
    <!-- <Marker :coordinates="[38, 28]" /> -->
    <Marker v-model:coordinates="coordinates" />
  </Map>
</template>
