<script setup lang="ts">
import { Map, AttributionControl } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
    <AttributionControl
      position="bottom-right"
      :custom-attribution='[
        "<a href=\"https://maplibre.org\" target=\"_blank\">© MapLibre</a>",
        "<a href=\"https://vue-libregl.vercel.app\" target=\"_blank\">© LibreGL</a>",
      ]'
    >
    </AttributionControl>
  </Map>
</template>
