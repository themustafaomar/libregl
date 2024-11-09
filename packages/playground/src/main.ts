import { createApp } from 'vue'
import './style.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import App from './App.vue'
import libregl from 'libregl'
import { router } from './router'

const app = createApp(App)

app.use(router)
app.use(libregl, {
  style:
    'https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
  center: [20.5, 48.6],
  height: '100vh',
  attributionControl: {
    compact: true,
    customAttribution: [
      `<a href="https://maplibre.org" target="_blank">© MapLibre</a>`,
      `<a href="https://libregl.vercel.app" target="_blank">© LibreGL</a>`,
    ],
  },
})
app.mount('#app')
