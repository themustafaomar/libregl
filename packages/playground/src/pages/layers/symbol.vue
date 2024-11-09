<script setup lang="ts">
import { MapLibreEvent, SymbolLayerSpecification } from 'maplibre-gl'
import { SymbolLayer } from 'libregl'
import data from '@/data/symbols'
import Map from '@/components/Map.vue'

const layout: SymbolLayerSpecification['layout'] = {
  'icon-image': 'symbol-marker',
  'text-field': ['get', 'title'],
  'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
  'text-offset': [0, 1.5],
  'text-anchor': 'top',
}

const onLoaded = async ({ target }: MapLibreEvent) => {
  target.addImage('symbol-marker', (await target.loadImage('/symbol-demo.png')).data)
}
</script>

<template>
  <Map
    @load="onLoaded"
    :center="[20, 50]"
    :zoom="4"
  >
    <SymbolLayer :source="{ type: 'geojson', data }" :layout />
  </Map>
</template>
