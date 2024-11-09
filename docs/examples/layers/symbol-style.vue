<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { MapLibreEvent } from 'maplibre-gl'
import { Map, SymbolLayer } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const onLoaded = async ({ target }: MapLibreEvent) => {
  target.addImage('symbol-marker', (await target.loadImage('/symbol-demo.png')).data)
}

const symbolLayer = useTemplateRef<any>('symbolLayer')
const setPaint = () => {
  symbolLayer.value.layout({
    'text-field': undefined,
    'icon-size': 0.75,
  })
  symbolLayer.value.paint('icon-opacity', 0.75)
}
</script>

<template>
  <Map
    @load="onLoaded"
    height="400px"
    :center="[18, 50]"
    :zoom="3.5"
    :style
  >
    <SymbolLayer
      ref="symbolLayer"
      :source="{
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: { title: 'Germany' },
              geometry: { type: 'Point', coordinates: [10.4515, 51.1657] },
            },
            {
              type: 'Feature',
              properties: { title: 'Romania' },
              geometry: { type: 'Point', coordinates: [24.9668, 45.9432] },
            },
            {
              type: 'Feature',
              properties: { title: 'Switzerland' },
              geometry: { type: 'Point', coordinates: [8.2275, 46.8182] },
            },
            {
              type: 'Feature',
              properties: { title: 'France' },
              geometry: { type: 'Point', coordinates: [2.2137, 46.2276] },
            },
            {
              type: 'Feature',
              properties: { title: 'Ukraine' },
              geometry: { type: 'Point', coordinates: [31.1656, 48.3794] },
            },
            {
              type: 'Feature',
              properties: { title: 'Poland' },
              geometry: { type: 'Point', coordinates: [19.1451, 51.9194] },
            },
          ],
        } as GeoJSON.FeatureCollection
      }"
      :paint="{
        'icon-color': '#f00',
      }"
      :layout="{
        'icon-image': 'symbol-marker',
        'text-field': ['get', 'title'],
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 1.5],
        'text-anchor': 'top',
      }"
    >
    </SymbolLayer>
  </Map>

  <button
    @click="setPaint"
    type="button"
    class="px-3 py-2 mt-4 me-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
    Change Style
  </button>
</template>
