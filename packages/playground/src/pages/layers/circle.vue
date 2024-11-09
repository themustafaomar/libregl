<script setup lang="ts">
import { Map, GeojsonSource, CircleLayer } from 'libregl'
import { useData } from '@/hooks'

const id = 'earthquakes'
const paint = {
  'circle-color': '#0ea5e9',
  'circle-radius': 3,
  'circle-stroke-opacity': 0.8,
  'circle-stroke-width': 1,
}
const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson')
</script>

<template>
  <Map
    :center="[18, 48]"
    :bearing="0"
    :zoom="4"
  >
    <GeojsonSource :id :data :cluster-max-zoom="4">
      <CircleLayer :id :paint />
    </GeojsonSource>
  </Map>
</template>
