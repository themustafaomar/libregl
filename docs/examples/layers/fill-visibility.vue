<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Map, GeojsonSource, FillLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_bathymetry_J_1000.geojson')

const fillLayer = useTemplateRef<any>('fillLayer')
const hideLayer = () => fillLayer.value.hide()
const showLayer = () => fillLayer.value.show()
const toggleLayer = () => fillLayer.value.toggle()
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
        ref="fillLayer"
        :paint="{
          'fill-color': '#f00',
          'fill-outline-color': '#000',
          'fill-opacity': 0.25,
        }"
        before-id="Ocean labels"
      >
      </FillLayer>
    </GeojsonSource>
  </Map>

  <button
    @click="hideLayer"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Hide fill
  </button>
  <button
    @click="showLayer"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Show fill
  </button>
  <button
    @click="toggleLayer"
    type="button"
    class="px-3 py-2 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Toggle fill
  </button>
</template>
