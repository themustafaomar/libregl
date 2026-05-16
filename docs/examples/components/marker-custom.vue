<script setup lang="ts">
import { ref } from 'vue'
import { Map, Marker } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const createMarkerElement = () => {
  const element = document.createElement('div')
  element.className = 'custom-marker'
  element.style.backgroundImage = 'url(https://picsum.photos/30/30/)'
  element.style.width = '30px'
  element.style.height = '30px'
  element.style.borderRadius = '50%'
  element.style.border = '2px solid blue'
  return element
}

const markers = ref<{
  lat: number
  lng: number
  element: HTMLElement
}[]>([
  { lat: 48.8566, lng: 2.3522, element: createMarkerElement() },
  { lat: 51.5074, lng: -0.1278, element: createMarkerElement() },
  { lat: 52.52, lng: 13.405, element: createMarkerElement() },
  { lat: 41.9028, lng: 12.4964, element: createMarkerElement() },
  { lat: 40.4168, lng: -3.7038, element: createMarkerElement() },
])
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3.5"
    :style
  >
    <Marker
      v-for="marker in markers"
      :coordinates="[marker.lng, marker.lat]"
      :element="marker.element"
    >
    </Marker>
  </Map>
</template>
