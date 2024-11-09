<script setup lang="ts">
import { shallowRef } from 'vue'
import { Map } from 'libregl'
import { LngLat } from 'maplibre-gl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const zoom = shallowRef(4.5)
const pitch = shallowRef(0)
const center = shallowRef<LngLat>(new LngLat(18, 49))
const bearing = shallowRef(0)

const setCenter = (event: Event, coordinatable: 'lat' | 'lng') => {
  const coordinate = (event.target as HTMLInputElement).valueAsNumber
  center.value = coordinatable === 'lng'
    ? new LngLat(coordinate, center.value.lat)
    : new LngLat(center.value.lng, coordinate)
}
</script>

<template>
  <Map
    height="400px"
    v-model:pitch="pitch"
    v-model:center="center"
    v-model:zoom="zoom"
    v-model:bearing="bearing"
    :style
  >
  </Map>
  
  <section class="mt-4">
    <button @click="zoom++">Zoom in</button> |
    <button @click="zoom--">Zoom out</button>
    <div class="my-2">
      Center: {{ center }}
      <input type="number" placeholder="Longitude" :value="center.lng" @input="setCenter($event, 'lng')" />
      <input type="number" placeholder="Latitude" :value="center.lat" @input="setCenter($event, 'lat')" />
    </div>
    <div class="my-2">
      Zoom: {{ zoom }} <input type="number" v-model="zoom" />
    </div>
    <div class="my-2">
      Pitch: {{ pitch }} <input type="number" v-model="pitch" />
    </div>
    <div class="my-2">
      Rotation: {{ bearing }} <input type="number" v-model="bearing" />
    </div>
  </section>
</template>

<style>
input {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2px 5px;
}
</style>