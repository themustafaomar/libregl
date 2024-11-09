<script setup lang="ts">
import { ref, shallowRef, watch } from 'vue'
import type { GeoJSONSource, LngLatLike } from 'maplibre-gl'
import { Map, GeojsonSource, LineLayer, useMap } from 'libregl'
import { useData } from '@/hooks'

const center = defineModel<LngLatLike>('center', {
  default: [18, 49],
})

const { data } = useData<GeoJSON.LineString>('/trips.geojson')
const { mapRef, maplibre, hasLoaded } = useMap()
watch([hasLoaded, data], ([a, b]) => {
  if (!a || !b) return
  animateLine()
})

const animation = shallowRef()
const geojson = shallowRef<GeoJSON.Feature<GeoJSON.LineString>>({
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'LineString',
    coordinates: [],
  },
})

const index = ref(0)
function animateLine() {
  console.log('Working...')
  if (!data.value) {
    return
  }
  const coordinates = data.value.coordinates[index.value]
  if (!coordinates) {
    console.log('Stopped..');
    return
  }

  geojson.value.geometry.coordinates.push(coordinates)

  const source = maplibre.value.getSource('route') as GeoJSONSource | undefined
  if (source) {
    source.setData(geojson.value)
  }

  animation.value = requestAnimationFrame(animateLine)
  index.value++
}

// setInterval(() => {
//   const coords = geojson.value.geometry.coordinates
// }, 100)
</script>

<template>
  <Map
    ref="mapRef"
    height="100vh"
    width="100%"
    :style="'/style.json'"
    :center="center"
    :zoom="12"
  >
    <GeojsonSource id="route" :data="geojson">
      <LineLayer
        :paint="{ 'line-color': '#f00', 'line-opacity': 0.75, 'line-width': 2, 'line-blur': 1 }"
      >
      </LineLayer>
    </GeojsonSource>
  </Map>
</template>
