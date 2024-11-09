<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Map, GeojsonSource, LineLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>(
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines_scale_rank.geojson'
)

const lineLayer = useTemplateRef<any>('lineLayer')
const setPaint = () => lineLayer.value.paint({
  'line-color': '#f00',
  'line-dasharray': [3, 1],
  'line-width': 1,
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
      <LineLayer
        ref="lineLayer"
        :paint="{
          'line-color': '#666',
          'line-dasharray': [2, 2],
          'line-width': 2,
        }"
        :layout="{
          'line-join': 'round',
        }"
      >
      </LineLayer>
    </GeojsonSource>
  </Map>

  <button
    @click="setPaint"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Change Line Style
  </button>
</template>
