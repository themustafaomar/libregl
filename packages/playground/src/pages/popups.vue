<script setup lang="ts">
import { Map, Popup } from 'libregl'
</script>

<template>
  <Map
    height="100vh"
    width="100%"
    :center="[18, 48]"
    :zoom="3.5"
    :style="'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'"
  >
    <Popup
      :offset="25"
      :coordinates="[24.9668, 45.9432]"
      text="Romania is a southeastern European country known for the forested region of Transylvania, ringed by the Carpathian Mountains."
    >
    </Popup>
  </Map>
</template>
