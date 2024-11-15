<script setup lang="ts">
import { shallowRef } from 'vue'
import { Map, Marker, type MarkerEvent } from 'libregl'
import type { LngLatLike } from 'maplibre-gl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const coordinates = shallowRef<LngLatLike>([19.834688, 50.294592])

const onDragStart = (event: MarkerEvent) => {
  console.log('onDragStart()', event)
}

const onDrag = (event: MarkerEvent) => {
  console.log('onDrag()', event)
}

const onDragEnd = (event: MarkerEvent) => {
  console.log('onDragEnd()', event)
  alert(`onDragEnd([${event.lngLat.lng}, ${event.lngLat.lat}])`)
}
</script>

<template>
  <Map
    height="400px"
    :center="[18, 48]"
    :zoom="3.5"
    :style
  >
    <Marker
     :coordinates
     :on-drag-start
     :on-drag
     :on-drag-end
     draggable
    >
    </Marker>
  </Map>
</template>
