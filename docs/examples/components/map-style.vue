<script setup lang="ts">
import { ref } from 'vue'
import { Map } from 'libregl'

const style = ref(`https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`)
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
  </Map>

  <select v-model="style" class="border rounded-lg mt-5">
    <option value="https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL">Streets</option>
    <option value="https://api.maptiler.com/maps/outdoor-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL">Outdoors</option>
    <option value="https://api.maptiler.com/maps/satellite/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL">Satellite</option>
    <option value="https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL">Hybrid</option>
  </select>
</template>
