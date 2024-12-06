import { createRouter, createWebHistory, Router } from 'vue-router'

export const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../pages/map/index.vue'),
    },
    {
      path: '/map/rotate-camera',
      name: 'rotate-camera',
      component: () => import('../pages/map/rotate-camera.vue'),
    },
    {
      path: '/sources/canvas',
      name: 'sources-canvas',
      component: () => import('../pages/sources/canvas.vue'),
    },
    {
      path: '/sources/vector',
      name: 'sources-vector',
      component: () => import('../pages/sources/vector.vue'),
    },
    {
      path: '/sources/image',
      name: 'sources-image',
      component: () => import('../pages/sources/image.vue'),
    },
    {
      path: '/routing',
      name: 'routing',
      component: () => import('../pages/routing.vue'),
    },
    {
      path: '/markers',
      name: 'markers',
      component: () => import('../pages/markers.vue'),
    },
    {
      path: '/popups',
      name: 'popups',
      component: () => import('../pages/popups.vue'),
    },
    {
      path: '/layers/background',
      name: 'background',
      component: () => import('../pages/layers/background.vue'),
    },
    {
      path: '/layers/circle',
      name: 'circle',
      component: () => import('../pages/layers/circle.vue'),
    },
    {
      path: '/layers/line',
      name: 'line',
      component: () => import('../pages/layers/line.vue'),
    },
    {
      path: '/layers/fill',
      name: 'fill',
      component: () => import('../pages/layers/fill.vue'),
    },
    {
      path: '/layers/fill-extrusion',
      name: 'fill-extrusion',
      component: () => import('../pages/layers/fill-extrusion.vue'),
    },
    {
      path: '/layers/heatmap',
      name: 'heatmap',
      component: () => import('../pages/layers/heatmap.vue'),
    },
    {
      path: '/layers/raster',
      name: 'raster',
      component: () => import('../pages/layers/raster.vue'),
    },
    {
      path: '/layers/symbol',
      name: 'symbol',
      component: () => import('../pages/layers/symbol.vue'),
    },
    {
      path: '/layers/hillshade',
      name: 'hillshade',
      component: () => import('../pages/layers/hillshade.vue'),
    },
  ],
})
