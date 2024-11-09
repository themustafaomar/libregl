<script setup lang="ts">
import { Map, VideoSource, RasterSource, RasterLayer } from 'libregl'

const style = 'https://api.maptiler.com/maps/satellite/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'

const TILES = 'https://api.maptiler.com/maps/uk-openzoomstack-light/{z}/{x}/{y}.png?key=get_your_own_OpIi9ZULNHzrESv6T2vL'
</script>

<template>
  <Map
    width="100%"
    :center="[-122.514426, 37.562984]"
    :zoom="16"
    :bearing="-96"
    :style="'https://api.maptiler.com/maps/satellite/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'"
  >
  <VideoSource
      :urls="[
        'https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4',
        'https://static-assets.mapbox.com/mapbox-gl-js/drone.webm',
      ]"
      :coordinates="[
        [-122.51596391201019, 37.56238816766053], [-122.51467645168304, 37.56410183312965],
        [-122.51309394836426, 37.563391708549425], [-122.51423120498657, 37.56161849366671],
      ]"
    >
      <RasterLayer />
    </VideoSource>

    <!-- Using layer without source -->
    <!-- <RasterLayer
      :source="{
        type: 'video',
        urls: [
          'https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4',
          'https://static-assets.mapbox.com/mapbox-gl-js/drone.webm',
        ],
        coordinates: [
          [-122.51596391201019, 37.56238816766053], [-122.51467645168304, 37.56410183312965],
          [-122.51309394836426, 37.563391708549425], [-122.51423120498657, 37.56161849366671],
        ],
      }"
      :paint="paint"
      :layout="layout"
    ></RasterLayer> -->
  </Map>

  <!-- <Map
    :center="[-1.4417974032127177, 52.089307558821304]"
    :zoom="5"
  >
    <RasterSource
      :tiles="[TILES]"
      :bounds="[-180, -85.0511, 180, 85.0511]"
    >
      <RasterLayer :maxzoom="6" />
    </RasterSource>
  </Map> -->
</template>
