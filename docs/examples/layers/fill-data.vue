<script setup lang="ts">
import { Map, GeojsonSource, FillLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data, refetch, isFetching } = useData<GeoJSON.FeatureCollection>(
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_bathymetry_J_1000.geojson'
)
const loadData = () => refetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson')
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
    <GeojsonSource :data>
      <FillLayer
        :paint="{
          'fill-color': '#f00',
          'fill-outline-color': '#000',
          'fill-opacity': 0.375,
        }"
        before-id="Ocean labels"
      >
      </FillLayer>
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
