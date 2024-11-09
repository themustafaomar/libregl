<script setup lang="ts">
import { Map, RasterDemSource, HillshadeLayer } from 'libregl'
</script>

<template>
  <Map
    id="hillshadeMap"
    :center="[18, 48]"
    :zoom="4"
  >
    <RasterDemSource
      :tiles="[
        'https://api.mapbox.com/raster/v1/mapbox.mapbox-terrain-dem-v1/{z}/{x}/{y}.webp?sku=101cAEVUT94zr&access_token=pk.eyJ1IjoibXVzdGFmYW9tYXIiLCJhIjoiY20xM2RtdXkwMHp6NjJscGQ0dDdlbzI0MSJ9.PCIvql9hNmtL7qYnL5Hmaw',
      ]"
    >
      <HillshadeLayer before-id="City labels" />
    </RasterDemSource>
  </Map>
</template>
  