<script setup lang="ts">
import { Map, TerrainControl } from 'libregl'
</script>

<template>
  <Map
    height="400px"
    :center="[11.39085, 47.27574]"
    :pitch="70"
    :zoom="12"
    hash
    :style="{
      version: 8,
      sources: {
        osm: {
          type: 'raster',
          tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '&copy; OpenStreetMap Contributors',
          maxzoom: 19,
        },
        // Use a different source for terrain and hillshade layers, to improve render quality
        terrainSource: {
          type: 'raster-dem',
          url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
          tileSize: 256,
        },
        hillshadeSource: {
          type: 'raster-dem',
          url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
          tileSize: 256,
        },
      },
      layers: [
        {
          id: 'osm',
          type: 'raster',
          source: 'osm',
        },
        {
          id: 'hills',
          type: 'hillshade',
          source: 'hillshadeSource',
          layout: { visibility: 'visible' },
          paint: { 'hillshade-shadow-color': '#473B24' },
        },
      ],
      terrain: {
        source: 'terrainSource',
        exaggeration: 1,
      },
      sky: {},
    }"
  >
    <TerrainControl source="terrainSource" />
  </Map>
</template>
