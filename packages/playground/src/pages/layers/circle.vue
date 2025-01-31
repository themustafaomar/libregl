<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Map, GeojsonSource, CircleLayer } from 'libregl'
import { useData } from '@/hooks'

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson')

const circleLayerRef = useTemplateRef<any>('circleLayer')
</script>

<template>
  <div class="ml-56">
    <button @click="console.log(circleLayerRef.getId())">Get Id</button> - 
    <button @click="console.log(circleLayerRef.getLayer())">Get Layer</button> - 
    <button @click="circleLayerRef.hide()">Hide</button> - 
    <button @click="circleLayerRef.show()">Show</button> - 
    <button @click="circleLayerRef.toggle()">Toggle</button> - 
    <button @click="circleLayerRef.paint({ 'circle-color': '#f66', 'circle-radius': 4 })">Paint</button>
  </div>
  <Map
    :center="[18, 48]"
    :bearing="0"
    :zoom="4"
  >
    <GeojsonSource :data :cluster-max-zoom="4">
      <CircleLayer
        ref="circleLayer"
        @click="(e) => console.log('click', e)"
        @mouseleave="() => console.log('mouseleave')"
        @mousemove="() => console.log('mousemove')"
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
</template>
