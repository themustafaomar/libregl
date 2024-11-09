<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Map, GeojsonSource, HeatmapLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>('/earthquakes.geojson')

const hillshadeRef = useTemplateRef('heatmapLayer')
const hideLayer = () => (hillshadeRef.value as any).hide()
const showLayer = () => (hillshadeRef.value as any).show()
const toggleLayer = () => (hillshadeRef.value as any).toggle()
</script>

<template>
  <Map
    height="400px"
    :center="[80, 35]"
    :zoom="3"
    :style
  >
    <GeojsonSource :data>
      <HeatmapLayer ref="heatmapLayer" />
    </GeojsonSource>
  </Map>

  <button
    @click="hideLayer"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Hide Heatmap
  </button>

  <button
    @click="showLayer"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Show Heatmap
  </button>

  <button
    @click="toggleLayer"
    type="button"
    class="px-3 py-2 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Toggle Heatmap
  </button>
</template>
