<script setup lang="ts">
import { LineLayerSpecification } from 'maplibre-gl'
import { Map, GeojsonSource, LineLayer } from 'libregl'
import { createGeometry } from '@/util'
import { useData } from '@/hooks'

const paint: LineLayerSpecification['paint'] = {
  'line-color': '#666',
  'line-dasharray': [2, 2],
  'line-width': 1.5,
}

const layout: LineLayerSpecification['layout'] = {
  'line-join': 'round',
}

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_europe.geojson')
</script>

<template>
  <Map
    :center="[18, 48]"
    :zoom="4"
  >
    <GeojsonSource id="world_counties" :data>
      <LineLayer id="world_counties_layer" :paint :layout />
    </GeojsonSource>

    <LineLayer
      id="route"
      :source="{
        type: 'geojson',
        data: { type: 'Feature', properties: {}, geometry: createGeometry(false) },
      }"
      :layout="{ 'line-cap': 'round' }"
      :paint="{
        'line-dasharray': [1, 1],
        'line-color': '#007296',
        'line-width': 4,
      }"
    >
    </LineLayer>

    <LineLayer
      :source="{
        type: 'geojson',
        data: { type: 'Feature', properties: {}, geometry: createGeometry(true) },
      }"
      :layout="{ 'line-cap': 'round' }"
      :paint="{
        'line-color': '#007296',
        'line-width': 4,
      }"
    >
    </LineLayer>
  </Map>
</template>
