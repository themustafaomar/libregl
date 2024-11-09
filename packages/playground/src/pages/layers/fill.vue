<script setup lang="ts">
import { Map, GeojsonSource, FillLayer } from 'libregl'
import { useData } from '@/hooks'

const { data } = useData<GeoJSON.FeatureCollection>('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson')
</script>

<template>
  <Map :zoom="4">
    <GeojsonSource :data>
      <FillLayer
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
