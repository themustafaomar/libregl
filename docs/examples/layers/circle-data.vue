<script setup lang="ts">
import { Map, GeojsonSource, CircleLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data, refetch, isFetching } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson')

const rerender = () => {
  refetch('/ne_110m_populated_places.geojson')
}
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
    <GeojsonSource :data>
      <CircleLayer
        :paint="{
          'circle-color': '#f00',
          'circle-radius': 3,
          'circle-stroke-opacity': 0.8,
          'circle-stroke-width': 1,
        }"
      >
      </CircleLayer>
    </GeojsonSource>
  </Map>

  <button
    @click="rerender"
    type="button"
    :disabled="isFetching"
    class="px-3 py-2 text-sm mt-4 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Rerender data
  </button>
</template>
