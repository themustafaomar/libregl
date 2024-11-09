<script setup lang="ts">
import { ref } from 'vue'
import { Map, Marker } from 'libregl'
import { MapMouseEvent, LngLatLike } from 'maplibre-gl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const markers = ref<LngLatLike[]>([])
const dropMarker = (e: MapMouseEvent) => markers.value.push(e.lngLat.toArray())
const removeMarker = () => markers.value.pop()
</script>

<template>
  <Map
    @click="dropMarker"
    height="400px"
    :center="[18, 48]"
    :zoom="3.5"
    :style
  >
    <Marker v-for="marker in markers" :coordinates="marker" />
  </Map>

  <button
    @click="removeMarker"
    :disabled="!markers.length"
    type="button"
    class="px-3 py-2 text-sm mt-4 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 disabled:opacity-60">
    Remove Latest
  </button>
</template>
