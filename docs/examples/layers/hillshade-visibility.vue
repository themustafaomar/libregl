<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Map, HillshadeLayer } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
const tiles = [`https://api.mapbox.com/raster/v1/mapbox.mapbox-terrain-dem-v1/{z}/{x}/{y}.webp?sku=101cAEVUT94zr&access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`]

const hillshadeRef = useTemplateRef('hillshadeLayer')
const hideLayer = () => (hillshadeRef.value as any).hide()
const showLayer = () => (hillshadeRef.value as any).show()
const toggleLayer = () => (hillshadeRef.value as any).toggle()
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3.5"
    :style
  >
    <HillshadeLayer
      ref="hillshadeLayer"
      before-id="City labels"
      :source="{
        type: 'raster-dem',
        tiles,
      }"
    >
    </HillshadeLayer>
  </Map>

  <button
    @click="hideLayer"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Hide Hillshade
  </button>
  <button
    @click="showLayer"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Show Hillshade
  </button>
  <button
    @click="toggleLayer"
    type="button"
    class="px-3 py-2 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Toggle Hillshade
  </button>
</template>
