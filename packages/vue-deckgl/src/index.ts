import type { App } from 'vue'

export * from './components'

export interface DeckGLOptions {}

const plugin = {
  install(_: App, __: Partial<DeckGLOptions> = {}) {
    //
  },
}

export default plugin
