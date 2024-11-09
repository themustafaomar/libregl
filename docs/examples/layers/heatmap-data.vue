<script setup lang="ts">
import { Map, GeojsonSource, HeatmapLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data, refetch, isFetching } = useData<GeoJSON.FeatureCollection>(
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
)
const loadData = () => refetch('/ne_110m_populated_places.geojson')
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
    <GeojsonSource :data>
      <HeatmapLayer />
    </GeojsonSource>

    <!-- GeoJSON FeatureCollection -->
    <!-- <HeatmapLayer
      :source="{
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              properties: {},
              type: 'Feature',
              geometry: { type: 'LineString', coordinates: [[31, 29], [10, 21], [15, 35]] },
            },
            {
              properties: {},
              type: 'Feature',
              geometry: { type: 'Point', coordinates: [19, 27.5] },
            },
          ],
        },
      }"
    /> -->

    <!-- Single GeoJSON feature -->
    <!-- <HeatmapLayer
      :source="{
        type: 'geojson',
        data: {
          properties: {},
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [50, 50] },
        },
      }"
    /> -->
  </Map>

  <button
    @click="loadData"
    type="button"
    :disabled="isFetching"
    class="px-3 py-2 text-sm mt-4 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    {{ isFetching ? 'Fetching...' : 'Load Data' }}
  </button>
</template>
