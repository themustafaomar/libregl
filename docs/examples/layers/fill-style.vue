<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Map, GeojsonSource, FillLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson')

const fillLayer = useTemplateRef<any>('fillLayer')
const setPaint = () => fillLayer.value.paint({
  'fill-color': '#00f',
  'fill-opacity': 0.5,
})
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3.5"
    :style
  >
    <GeojsonSource :data>
      <FillLayer
        ref="fillLayer"
        :paint="{
          'fill-color': '#f00',
          'fill-outline-color': '#000',
          'fill-opacity': 0.475,
        }"
        before-id="City labels"
      >
      </FillLayer>
    </GeojsonSource>
  </Map>

  <button
    @click="setPaint"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Change Fill Color
  </button>
</template>
