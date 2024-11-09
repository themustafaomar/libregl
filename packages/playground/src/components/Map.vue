<script setup lang="ts">
import { LngLatLike } from 'maplibre-gl'
import { Map } from 'libregl'

interface Props {
  center?: LngLatLike
  zoom?: number
  bearing?: number
  style?: string
  height?: string
}

withDefaults(defineProps<Props>(), {
  center: () => [18, 48],
  zoom: 4,
  bearing: 0,
  style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
  height: '100vh',
})

const emit = defineEmits(['load'])
</script>

<template>
  <Map
    :height
    width="100%"
    :center="center"
    :zoom="zoom"
    :bearing="bearing"
    :style="style"
    @load="emit('load', $event)"
  >
    <slot></slot>
  </Map>
</template>
