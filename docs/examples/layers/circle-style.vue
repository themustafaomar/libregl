<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Map, GeojsonSource, CircleLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson')

const circleLayer = useTemplateRef<any>('circleLayer')
const setPaint = (event: Event, outline: boolean = false) => {
  const layer = circleLayer.value
  const target = event.target as HTMLInputElement
  if (outline) {
    return layer.paint('circle-stroke-color', target.value)
  }
  layer.paint({
    'circle-color': target.value,
    'circle-radius': 3.5,
  })
}
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3.25"
    :style
  >
    <GeojsonSource :data>
      <CircleLayer
        ref="circleLayer"
        :paint="{
          'circle-color': '#f00',
          'circle-radius': 3,
          'circle-stroke-opacity': 0.65,
          'circle-stroke-width': 1,
        }"
      >
      </CircleLayer>
    </GeojsonSource>
  </Map>

  <div class="flex mt-5">
    <label class="text-sm font-medium text-gray-900 me-3" for="circle-color">Circle Color</label>
    <input type="color" @input="setPaint" id="circle-color" value="#f00f00" />
    <div class="mx-3"></div>
    <label class="text-sm font-medium text-gray-900 me-3" for="circle-outline-color">Outline Color</label>
    <input type="color" @input="setPaint($event, true)" id="circle-outline-color" />
  </div>
</template>
