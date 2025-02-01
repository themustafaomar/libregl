<script setup lang="ts">
import { Map, GeojsonSource, LineLayer } from 'libregl'
import { useData } from '@/hooks/useData'
import { MapLayerMouseEvent } from 'maplibre-gl'
import { shallowRef } from 'vue'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>(
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines_scale_rank.geojson'
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
      <LineLayer
        @click="onClick"
        @mousemove="onMousemove"
        :paint="{
          'line-width': 4,
          'line-color': '#f66',
          'line-opacity': 0.75,
        }"
      >
      </LineLayer>
    </GeojsonSource>
  </Map>
  <p class="mt-3">Data: {{ lngLat }}</p>
</template>
