<script setup lang="ts">
import { shallowRef, watch } from 'vue'
import { Map, GeojsonSource, CircleLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson')

const filter = shallowRef('["<=", ["get", "scalerank"], 3]')
const finalFilter = shallowRef()
watch(filter, () => {
  try {
    finalFilter.value = JSON.parse(filter.value)
  } catch (e) {
    alert('Please enter a valid filter.')
  }
})
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
        :filter="finalFilter"
        :paint="{
          'circle-color': '#0ea5e9',
          'circle-radius': 6,
          'circle-stroke-color': '#000',
          'circle-stroke-opacity': 0.5,
          'circle-stroke-width': 1,
        }"
      >
      </CircleLayer>
    </GeojsonSource>
  </Map>
  <input v-model="filter" type="text" class="border border-gray-200 shadow-sm leading-normal rounded-lg outline-none focus:shadow-none focus:border-none focus:ring-2 focus:ring-blue-200 w-full p-3 mt-5" />
</template>
