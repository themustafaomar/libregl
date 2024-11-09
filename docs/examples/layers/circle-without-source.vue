<script setup lang="ts">
import { Map, CircleLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson')
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
    <CircleLayer
      v-if="data"
      :source="{
        type: 'geojson',
        data,
      }"
      :paint="{
        'circle-color': '#f00',
        'circle-radius': 3,
        'circle-stroke-opacity': 0.8,
        'circle-stroke-width': 1,
      }"
    >
    </CircleLayer>
  </Map>
</template>
