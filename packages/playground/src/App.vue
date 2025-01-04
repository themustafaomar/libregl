<script setup lang="ts">
import { useRouter } from 'vue-router'

const examples = [
  { title: 'Map', to: '/map' },
  { title: 'Map/Rotate camera', to: '/map/rotate-camera' },
  { title: 'Markers', to: '/markers' },
  { title: 'Popups', to: '/popups' },
  { title: 'Controls', to: '/controls' },
  { title: 'Layers / Background', to: '/layers/background' },
  { title: 'Layers / Circle', to: '/layers/circle' },
  { title: 'Layers / FillExtrusion', to: '/layers/fill-extrusion' },
  { title: 'Layers / Fill', to: '/layers/fill' },
  { title: 'Layers / Heatmap', to: '/layers/heatmap' },
  { title: 'Layers / Hillshade', to: '/layers/hillshade' },
  { title: 'Layers / Line', to: '/layers/line' },
  { title: 'Layers / Raster', to: '/layers/raster' },
  { title: 'Layers / Symbol', to: '/layers/symbol' },
  { title: 'Sources / Canvas', to: '/sources/canvas' },
  { title: 'Source / Image', to: '/sources/image' },
  { title: 'Sources / Vector', to: '/sources/vector' },
]
const router = useRouter()
const activate = (data: any) => {
  router.push(data.to )
}
</script>

<template>
  <div class="fixed top-0 left-0 p-2 w-52 z-10 h-full backdrop-filter overflow-auto backdrop-blur-lg bg-gray-900 bg-opacity-90 scrollbar-track-slate-800 scrollbar-thumb-slate-700 scrollbar-thin">
    <div v-for="example in examples" class="relative mb-3.5 ps-2">
      <h4 class="font-semibold capitalize text-gray-300 mb-1">{{ example.title }}</h4>
      <p class="text-sm text-gray-400 mb-2">View example {{ example.title }} components.</p>
      <button @click="activate(example)" type="button" class="flex rounded-full bg-sky-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 me-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
        View Example
      </button>
    </div>
  </div>

  <RouterView />
</template>
