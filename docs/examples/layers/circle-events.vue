<script setup lang="ts">
import { shallowRef } from 'vue'
import { MapLayerMouseEvent } from 'maplibre-gl'
import { Map, GeojsonSource, CircleLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>(
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
)

const onClick = (event: MapLayerMouseEvent) => {
  alert(event.lngLat)
}

const lngLat = shallowRef()
const onMousemove = (event: MapLayerMouseEvent) => {
  lngLat.value = event.lngLat.toArray()
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
      <CircleLayer
        @click="onClick"
        @mousemove="onMousemove"
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
  <p class="mt-3">Data: {{ lngLat }}</p>
</template>
