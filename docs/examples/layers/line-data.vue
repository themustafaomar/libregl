<script setup lang="ts">
import { Map, GeojsonSource, LineLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data, isFetching, refetch } = useData<GeoJSON.FeatureCollection>(
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines_scale_rank.geojson'
)
const loadData = () => refetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson')
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
    <GeojsonSource :data>
      <LineLayer />
    </GeojsonSource>
  </Map>
  
  <button
    @click="loadData"
    type="button"
    :disabled="isFetching"
    class="px-3 py-2 text-sm mt-4 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    {{ isFetching ? 'Fetching...' : 'Load Data' }}
  </button>
</template>
