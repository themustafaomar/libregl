<script setup lang="ts">
import { Map, Marker, Popup } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3.5"
    :style
  >
    <Marker :coordinates="[13, 48]">
      <Popup :offset="25">
        <p class="my-0">Markers can be combined with the Popup component to display additional information or messages when the marker is clicked or hovered over.</p>
      </Popup>
    </Marker>
  </Map>
</template>
