<script setup lang="ts">
import { Map, GeojsonSource, HeatmapLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>('/earthquakes.geojson')
</script>

<template>
  <Map
    height="400px"
    :center="[80, 35]"
    :zoom="3"
    :style
  >
    <GeojsonSource :data>
      <HeatmapLayer />
    </GeojsonSource>
  </Map>
</template>
