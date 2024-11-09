<script setup lang="ts">
import { Map, LineLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>(
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines_scale_rank.geojson'
)
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
    <LineLayer
      v-if="data"
      :source="{
        type: 'geojson',
        data,
      }"
      :layout="{ 'line-cap': 'round' }"
      :paint="{
        'line-color': '#374151',
        'line-width': 1.5,
      }"
    >
    </LineLayer>
  </Map>
</template>
