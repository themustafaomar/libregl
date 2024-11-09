<script setup lang="ts">
import { Map, GeojsonSource, HeatmapLayer } from 'libregl'
import { useData } from '@/hooks'

const {
  data,
  isFetching,
  refetch,
} = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places_simple.geojson')
const loadData = () => refetch('/ne_110m_populated_places.geojson')
</script>

<template>
  <button @click="loadData" :disabled="isFetching" class="ms-56">
    {{ isFetching ? 'Fetching...' : 'Update Source Data.' }}
  </button>

  <Map
    height="calc(100vh - 24px)"
    :center="[40, 35]"
    :zoom="4"
  >
    <GeojsonSource :data>
      <HeatmapLayer />
    </GeojsonSource>
  </Map>
</template>
