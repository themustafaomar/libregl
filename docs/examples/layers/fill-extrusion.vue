<script setup lang="ts">
import { Map, GeojsonSource, FillExtrusionLayer } from 'libregl'
import { useData } from '@/hooks/useData'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const { data } = useData<GeoJSON.FeatureCollection>('https://maplibre.org/maplibre-gl-js/docs/assets/indoor-3d-map.geojson')
</script>

<template>
  <Map
    height="400px"
    :center="[-87.61694, 41.86625]"
    :zoom="15.99"
    :bearing="20"
    :pitch="40"
    :style
  >
    <GeojsonSource :data>
      <FillExtrusionLayer
        :paint="{
          // See the MapLibre Style Specification for details on data expressions.
          // https://maplibre.org/maplibre-style-spec/expressions/
          // Get the fill-extrusion-color from the source 'color' property.
          'fill-extrusion-color': ['get', 'color'],
          // Get fill-extrusion-height from the source 'height' property.
          'fill-extrusion-height': ['get', 'height'],
          // Get fill-extrusion-base from the source 'base_height' property.
          'fill-extrusion-base': ['get', 'base_height'],
          // Make extrusions slightly opaque for see through indoor walls.
          'fill-extrusion-opacity': 0.5,
        }"
      >
      </FillExtrusionLayer>
    </GeojsonSource>
  </Map>
</template>
