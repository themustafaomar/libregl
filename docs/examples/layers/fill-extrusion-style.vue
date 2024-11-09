<script setup lang="ts">
import { Map, FillExtrusionLayer } from 'libregl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
</script>

<template>
  <Map
    height="400px"
    :center="[-74.0060, 40.7128]"
    :zoom="15.5"
    :bearing="180"
    :pitch="60"
    :style
  >
    <FillExtrusionLayer
      source="maptiler_planet"
      source-layer="building"
      :paint="{
        // Show lower buildings in green, higher in red.
        'fill-extrusion-color': [
          'interpolate',
          ['linear'],
          ['get', 'render_height'],
          0,
          '#0a0',
          70,
          '#a00',
        ],

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          14,
          0,
          14.05,
          ['get', 'render_height'],
        ],

        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          14,
          0,
          14.05,
          ['get', 'render_min_height'],
        ],
        'fill-extrusion-opacity': 0.6,
      }"
    >
    </FillExtrusionLayer>
  </Map>
</template>
