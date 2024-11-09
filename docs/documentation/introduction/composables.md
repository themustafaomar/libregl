---
title: Composables
metadata:
  title: Composables
  description: LibreGL is a library that brings the power of MapLibre directly to Vue apps.
---

The Composables page introduces a set of utility functions designed to simplify interactions with libregl.

These composables provide direct access to map instances and states, making it easier to manage and manipulate maps within Vue’s composition API.

## useMap()

The useMap() composable allows you to access and observe the map state, providing references to the map instance and its loading status.

By calling useMap with the id of your map component, you can easily access and control the map within your components.

This composable is particularly useful for integrating map logic into your app’s reactive data flow.

```markup
<script setup>
import { Map, useMap } from 'libregl'

const { mapRef, map, isLoaded } = useMap('mapId')

// Watch for changes in map loading status.
watch(isLoaded, (value) => {
  console.log(value, mapRef.value, map.value)
})
</script>

<template>
  <Map id="mapId"></Map>
</template>
```