<script setup lang="ts">
import { Map, BackgroundLayer } from 'libregl'
</script>

<template>
  <Map
    :center="[18, 48]"
    :zoom="4"
    :style="'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'"
  >
    <BackgroundLayer
      :minzoom="5"
      :maxzoom="6"
      :paint="{
        'background-color': '#fff',
        'background-opacity': 0.35,
      }"
    >
    </BackgroundLayer>
  </Map>
</template>
