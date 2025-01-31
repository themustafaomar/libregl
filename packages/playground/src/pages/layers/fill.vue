<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { Map, GeojsonSource, FillLayer } from 'libregl'
import { useData } from '@/hooks'

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson')

const fillLayerRef = useTemplateRef<any>('fillLayer')
</script>

<template>
  <div class="ml-56">
    <button @click="console.log(fillLayerRef.getId())">Get Id</button> - 
    <button @click="console.log(fillLayerRef.getLayer())">Get Layer</button> - 
    <button @click="fillLayerRef.hide()">Hide</button> - 
    <button @click="fillLayerRef.show()">Show</button> - 
    <button @click="fillLayerRef.toggle()">Toggle</button> - 
    <button @click="fillLayerRef.paint({ 'fill-color': '#f06', 'fill-opacity': 1 })">Paint</button>
  </div>
  <Map :zoom="4">
    <GeojsonSource :data>
      <FillLayer
        @click="(e) => console.log(e.lngLat)"
        ref="fillLayer"
        before-id="City labels"
        :paint="{
          'fill-color': '#f00',
          'fill-opacity': 0.5,
          'fill-outline-color': '#000',
        }"
      >
      </FillLayer>
    </GeojsonSource>
  </Map>
</template>
