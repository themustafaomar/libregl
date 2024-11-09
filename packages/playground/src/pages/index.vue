<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { LngLatLike, MapLibreEvent } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import {
  Map,
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
  ScaleControl,
  AttributionControl,
  GeojsonSource,
  HeatmapLayer,
} from 'libregl'
import { useData } from '../hooks/useData'

const onLoaded = (event: MapLibreEvent) => {
  console.log(event)
}
const onMapZoom = (event: MapLibreEvent) => {
  console.log(event)
}
const onBoxZoom = (event: MapLibreEvent<WheelEvent>) => {
  console.log(event)
}

const onDragStart = (event: any) => {
  console.log('onDragStart()', event)
}

const onDrag = (event: any) => {
  console.log('onDrag()', event)
}

const onDragEnd = (event: any) => {
  console.log('onDragEnd()', event)
}

const coordinates = shallowRef<LngLatLike>([30.834688, 29.294592])
const setCoordinates = () => {
  coordinates.value = [31, 27]
}

const showMarker = ref(true)
const markerRef = ref()
const controlMarker = () => {
  markerRef.value.removeMarker()
}
const toggleMarker = () => {
  showMarker.value = !showMarker.value
}

const onGeoLocate = () => {
  console.log('@geolocate')
}
const onTrackUserLocationEnd = () => {
  console.log('@trackuserlocationend')
}

const scaleRef = ref()
const setScale = () => {
  scaleRef.value.scale.setUnit('nautical')
}

const {
  data: earthquakes
} = useData<GeoJSON.GeoJSON>('/earthquakes.geojson')

// const {
//   data: lines,
// } = useData<GeoJSON.GeoJSON>('/OCS_Protractions_-_Pacific_Region_West_Coast.geojson')
</script>

<template>
  <!-- <router-link to="/layers/fill">Fill layer</router-link> -->

  <!-- <div style="margin-bottom: 1rem; display: flex">
    <button @click="controlMarker">Remove Marker</button>
    <button @click="toggleMarker">Toggle Marker</button>
    <button @click="setScale">Switch Scale</button>
    <button @click="setCoordinates">Set Position</button>
  </div> -->

  <Map
    @load="onLoaded"
    @zoomstart="onMapZoom"
    @zoom="onMapZoom"
    @zoomend="onMapZoom"
    @boxzoomstart="onBoxZoom"
    @boxzoomend="onBoxZoom"
    @boxzoomcancel="onBoxZoom"
    height="100vh"
    width="100%"
    :zoom="4"
    :style="'/style.json'">
    <AttributionControl
      position="bottom-right"
      :compact="false"
      :custom-attribution="['LibreGL']">
    </AttributionControl>

    <NavigationControl
      position="top-right"
      visualize-pitch
      show-compass
      show-zoom>
    </NavigationControl>

    <GeolocateControl
      position="top-right"
      :position-options="{ enableHighAccuracy: true }"
      @geolocate="onGeoLocate"
      @trackuserlocationend="onTrackUserLocationEnd">
    </GeolocateControl>

    <ScaleControl
      ref="scaleRef"
      position="bottom-left"
      unit="metric">
    </ScaleControl>

    <Marker
      ref="markerRef"
      v-model="showMarker"
      :coordinates="coordinates"
      :on-drag-start
      :on-drag
      :on-drag-end
      :draggable="false">
      <Popup :offset="25" text="Construction on the Washington Monument began in 1848." />
    </Marker>

    <GeojsonSource id="earthquakes" :data="earthquakes">
      <HeatmapLayer id="earthquakes" />
    </GeojsonSource>

    <!-- <GeojsonSource id="earthquakes" :data="earthquakes">
      <CircleLayer
        id="earthquakes"
        :paint="{
          'circle-color': '#f00',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#000',
          'circle-radius': 3,
          'circle-stroke-opacity': 0.75,
        }">
      </CircleLayer>
    </GeojsonSource> -->

    <!-- <GeojsonSource id="lines" :data="lines">
      <LineLayer
        id="lines"
        :paint="{
          'circle-color': '#f00',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#000',
          'circle-radius': 3,
          'circle-stroke-opacity': 0.75,
        }">
      </LineLayer>
    </GeojsonSource> -->
  </Map>
</template>
