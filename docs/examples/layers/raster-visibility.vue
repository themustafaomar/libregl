<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Map, VideoSource, RasterLayer } from 'libregl'

const style = `https://api.maptiler.com/maps/satellite/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const rasterLayer = useTemplateRef('rasterLayer')
const hideLayer = () => (rasterLayer.value as any).hide()
const showLayer = () => (rasterLayer.value as any).show()
const toggleLayer = () => (rasterLayer.value as any).toggle()
</script>

<template>
  <Map
    height="400px"
    :center="[-122.514426, 37.562984]"
    :zoom="16"
    :bearing="-96"
    :style
  >
    <VideoSource
      :urls="[
        'https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4',
        'https://static-assets.mapbox.com/mapbox-gl-js/drone.webm',
      ]"
      :coordinates="[
        [-122.51596391201019, 37.56238816766053], [-122.51467645168304, 37.56410183312965],
        [-122.51309394836426, 37.563391708549425], [-122.51423120498657, 37.56161849366671],
      ]"
    >
      <RasterLayer ref="rasterLayer" />
    </VideoSource>
  </Map>

  <button
    @click="hideLayer"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Hide Video
  </button>
  <button
    @click="showLayer"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Show Video
  </button>
  <button
    @click="toggleLayer"
    type="button"
    class="px-3 py-2 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Toggle Video
  </button>
</template>
