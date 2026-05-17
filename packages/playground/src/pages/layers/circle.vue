<script setup lang="ts">
import { ref, shallowRef, useTemplateRef } from 'vue'
import { Map, GeojsonSource, CircleLayer } from 'libregl'
import { useData } from '@/hooks'

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson')

const circleLayerRef = useTemplateRef<any>('circleLayer')
const filter = shallowRef('["<=", ["get", "scalerank"], 3]')

const paint = ref(`{
  "circle-color": "#0ea5e9",
  "circle-radius": 6,
  "circle-stroke-color": "#000",
  "circle-stroke-opacity": 0.5,
  "circle-stroke-width": 1
}`)
</script>

<template>
  <div class="ml-56 py-2">
    <button @click="console.log(circleLayerRef.getId())">Get Id</button> - 
    <button @click="console.log(circleLayerRef.getLayer())">Get Layer</button> - 
    <button @click="circleLayerRef.hide()">Hide</button> - 
    <button @click="circleLayerRef.show()">Show</button> - 
    <button @click="circleLayerRef.toggle()">Toggle</button> - 
    <button @click="circleLayerRef.paint({ 'circle-color': '#f66', 'circle-radius': 4 })">Paint</button>
    <br>
    <input v-model="filter" type="text" class="min-w-[300px] my-3" />
    <br>
    <textarea v-model="paint" rows="7" cols="100" class="border p-3"></textarea>
  </div>
  <Map
    :center="[18, 48]"
    :bearing="0"
    :zoom="4"
  >
    <GeojsonSource :data :cluster-max-zoom="4">
      <CircleLayer
        ref="circleLayer"
        :filter="JSON.parse(filter)"
        :paint="JSON.parse(paint)"
        @mouseleave="() => console.log('mouseleave')"
        @mousemove="() => console.log('mousemove')"
        @click="(e) => console.log('click', e)"
      >
      </CircleLayer>
    </GeojsonSource>
  </Map>
</template>
