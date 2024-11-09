
<script setup lang="ts">
import { Map, BackgroundLayer } from 'libregl'
import { MapEventType } from 'maplibre-gl'

const style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

const onLoaded = async ({ target}: MapEventType['load']) => {
  target.addImage('sample-pattern', (await target.loadImage('/black-thread.png')).data)
}
</script>

<template>
  <Map
    @load="onLoaded"
    height="400px"
    :center="[18, 48]"
    :zoom="3"
    :style
  >
    <BackgroundLayer
      :paint="{
        'background-opacity': 0.4,
        'background-pattern': 'sample-pattern',
      }"
    >
    </BackgroundLayer>
  </Map>
</template>
