<script setup lang="ts">
import { ref } from 'vue'
import { Map } from 'libregl'

const currentStyle = ref(`https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`)
const styles = [
  { name: 'Streets', style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}` },
  { name: 'Outdoors', style: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}` },
  { name: 'Satellite', style: `https://api.maptiler.com/maps/satellite/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}` },
  { name: 'Hybrid', style: `https://api.maptiler.com/maps/hybrid/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}` },
]
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style="currentStyle"
  >
  </Map>

  <select v-model="currentStyle" class="border rounded-lg mt-5">
    <option v-for="style in styles" :key="style.name" :value="style.style">
      {{ style.name }}
    </option>
  </select>
</template>
