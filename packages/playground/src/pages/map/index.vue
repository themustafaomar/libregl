<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { Map } from 'libregl'
import { LngLat } from 'maplibre-gl'

const zoom = ref(4.5)
const bearing = ref(0)
const pitch = ref(0)

const center = shallowRef<LngLat>(new LngLat(18, 49))
const setCenter = (event: Event, coordinatable: 'lat' | 'lng') => {
  const coordinate = (event.target as HTMLInputElement).valueAsNumber
  center.value = coordinatable === 'lng' ? new LngLat(coordinate, center.value.lat) : new LngLat(center.value.lng, coordinate)
}

const style = ref('https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL')
const switchStyle = () => {
  style.value = 'https://api.maptiler.com/maps/satellite/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'
}

const mapRef = ref()
const getMap = () => {
  const map = mapRef.value.map
  console.log(map)
}
</script>

<template>
  <section class="ps-56 p-3">
    <router-link to="/layers/heatmap">Leave</router-link><br>
    <button @click="zoom++">Zoom in</button> |
    <button @click="zoom--">Zoom out</button> |
    <button @click="getMap">Get map</button> | 
    <button @click="switchStyle">Switch style</button>
    <hr>
    Center: {{ center }}
    <input type="number" placeholder="Longitude" :value="center.lng" @input="setCenter($event, 'lng')" />
    <input type="number" placeholder="Latitude" :value="center.lat" @input="setCenter($event, 'lat')" />
    <hr>
    Zoom: {{ zoom }} <input type="number" v-model="zoom" />
    <hr>
    Pitch: {{ pitch }} <input type="number" v-model="pitch" />
    <hr>
    Rotation: {{ bearing }} <input type="number" v-model="bearing" />
  </section>

  <Map
    ref="mapRef"
    height="100vh"
    width="100%"
    :style="'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'"
    v-model:pitch="pitch"
    v-model:center="center"
    v-model:zoom="zoom"
    v-model:bearing="bearing"
  >
  <!-- @load="(event) => console.log('@load', event)"
    @click="(event) => console.log('@click', event)"
    @dragend="(event) => console.log('@dragend', event)"
    @zoomend="(event) => console.log('@zoomend', event)"
    @boxzoomend="(event) => console.log('@boxzoom', event)" -->
  </Map>
</template>
