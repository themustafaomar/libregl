<script setup lang="ts">
import {
  Map,
  ScaleControl,
  GeolocateControl,
  GlobeControl,
  FullscreenControl,
  LogoControl,
  NavigationControl,
  AttributionControl
} from 'libregl'
</script>

<template>
  <Map
    height="100vh"
    :style="'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'"
    :zoom="4"
    :attribution-control="false"
  >
    <AttributionControl />
    <NavigationControl />
    <FullscreenControl />
    <GeolocateControl
      @trackuserlocationend="console.log('trackuserlocationend', $event)"
      @trackuserlocationstart="console.log('trackuserlocationstart', $event)"
      @userlocationlostfocus="console.log('userlocationlostfocus', $event)"
      @userlocationfocus="console.log('userlocationfocus', $event)"
      @geolocate="console.log('geolocate', $event)"
      @error="console.log('error', $event)"
      @outofmaxbounds="console.log('outofmaxbounds', $event)"
    >
    </GeolocateControl>
    <GlobeControl />
    <LogoControl />
    <ScaleControl position="bottom-right" />
  </Map>
</template>
