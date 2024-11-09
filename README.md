# LibreGL

LibreGL empowers your Vue applications with the full mapping and visualization capabilities of MapLibre GL.

With an intuitive API, reactive data binding, and a collection of highly customizable components, LibreGL simplifies the creation of interactive maps, rich data visualizations, and geospatial tools designed to fit your needs, for more information please visit the offical [documentation](https://libregl.vercel.app).

Originally created to integrate with [DeckGL](https://deck.gl), LibreGL marks the first step in bringing advanced map visualization tools to Vue while development on `vue-deckgl` is on hold, I'm excited to release LibreGL as the foundation, stay tuned for future updates!

## Demo

For live demo please visit [https://stackblitz.com/edit/libregl](https://stackblitz.com/edit/libregl).

Explore live examples and interactive demos in our [playground](https://github.com/themustafaomar/libregl/tree/main/packages/playground), to see `libregl` in action.

## Installation

To get started with libregl, you can install it through your preferred package manager.

```bash
npm install libregl # pnpm add libregl || yarn add libregl
```

## Quick usage

To get started with libregl in your project, follow these quick and easy steps:

```ts
import { createApp, type App } from 'vue'
import libregl from 'libregl'

const app: App = createApp(...)

app.use(libregl({
  //
}))

app.mount('#app')
```

## License

LibreGL is released under the MIT License.