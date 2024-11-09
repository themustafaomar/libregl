<script setup lang="ts">
import { Map, Popup } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3.5"
    :style
  >
    <Popup
      :offset="25"
      :coordinates="[24.9668, 45.9432]"
      text="Romania is a southeastern European country known for the forested region of Transylvania, ringed by the Carpathian Mountains."
    >
    </Popup>
  </Map>
</template>
