<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { Map, GeojsonSource, HeatmapLayer } from 'libregl'
import { useData } from '@/hooks/useData'

interface List { pallete: string[]; active: boolean }

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>(
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
)

const heatmapLayer = useTemplateRef<any>('heatmapLayer')
const lists = ref<List[]>([
  { pallete: ['rgb(103, 169 ,207)', 'rgb(209, 229, 240)', 'rgb(255, 148, 148)', 'rgb(255, 87, 87)', 'rgb(255, 35, 35)'], active: true },
  { pallete: ['rgba(0, 255, 255, 1)', 'rgba(144, 238, 144, 1)', 'rgba(255, 255, 0, 1)', 'rgba(255, 165, 0, 1)', 'rgba(255, 0, 0, 1)'], active: false },
  { pallete: ['rgb(152, 251, 152)', 'rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 69, 0)', 'rgb(255, 0, 0)'], active: false },
  { pallete: ['rgb(106, 90, 205)', 'rgb(60, 179, 113)', 'rgb(240, 230, 140)', 'rgb(255, 140, 0)', 'rgb(255, 20, 147)'], active: false },
])
const setHeatmapColor = (list: List) => {
  lists.value.forEach((item) =>item.active = false)
  list.active = true
  heatmapLayer.value.paint({
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0, 'rgba(33,102,172,0)',
      0.2, list.pallete[0],
      0.4, list.pallete[1],
      0.6, list.pallete[2],
      0.8, list.pallete[3],
      1, list.pallete[4],
    ],
  })
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
      <HeatmapLayer
        ref="heatmapLayer"
        :paint="{
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(33,102,172,0)',
            0.2, 'rgb(103,169,207)',
            0.4, 'rgb(209,229,240)',
            0.6, 'rgb(255,148,148)',
            0.8, 'rgb(255,87,87)',
            1, 'rgb(255,35,35)',
          ],
        }"
      >
      </HeatmapLayer>
    </GeojsonSource>
  </Map>

  <div class="flex cursor-pointer overflow-auto gap-5 mt-5">
    <div
      v-for="list in lists"
      class="inline-flex gap-px border-2 border-transparent rounded-lg p-px"
      :class="{ '!border-emerald-500': list.active }" @click="setHeatmapColor(list)"
    >
      <span v-if="list.active" class="leading-normal font-semibold text-green-600 px-1">✓</span>
      <div
        v-for="color in list.pallete"
        :style="`background-color: ${color}`"
        class="w-6 h-6 rounded-md"
      >
      </div>
    </div>
  </div>
</template>
