<script setup lang="ts">
import { FillExtrusionLayerSpecification } from 'maplibre-gl'
import { Map, GeojsonSource, FillExtrusionLayer } from 'libregl'
import { useData } from '@/hooks'

const paint: FillExtrusionLayerSpecification['paint'] = {
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
}

const { data } = useData<GeoJSON.FeatureCollection>('https://maplibre.org/maplibre-gl-js/docs/assets/indoor-3d-map.geojson')
</script>

<template>
  <Map
    width="100%"
    :center="[-74.0060, 40.7128]"
    :zoom="15"
    :bearing="20"
    :pitch="60"
  >
    <GeojsonSource :data>
      <FillExtrusionLayer
        source="maptiler_planet"
        source-layer="building"
        :paint
      >
      </FillExtrusionLayer>
    </GeojsonSource>
  </Map>
</template>
