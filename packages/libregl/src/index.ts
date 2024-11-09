
import type { App } from 'vue'
import type { AttributionControlOptions, LngLatLike, StyleSpecification } from 'maplibre-gl'

export * from './components'
export * from './hooks'

export interface LibreGLOptions {
  width: string
  height: string
  center: LngLatLike
  style: string | StyleSpecification
  attributionControl: false | AttributionControlOptions
}

const plugin = {
  install(app: App, options: Partial<LibreGLOptions> = {}) {
    app.config.globalProperties.$libregl = options
  },
}

export default plugin
