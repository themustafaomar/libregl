---
title: Global Options
metadata:
  title: Global Options
  description: When using LibreGL in a Vue application, you can set global options upon installation to define default map settings, which will apply to all Map components.
---

When using LibreGL in a Vue application, you can set global options upon installation to define default map settings, which will apply to all Map components.

## Options

This approach simplifies map configuration across your application by letting you specify properties like `style`, `center`, `height`, `width` and `attributionControl` once, rather than repeating them for every *Map* component.

```ts
import { createApp, type App } from 'vue'
import libregl from 'libregl'

const app: App = createApp(...)

app.use(
  libregl({
    style: 'YOUR_STYLE_HERE',
    height: '100vh',
  })
)
```

These global settings automatically apply to all *Map* instances, creating a consistent default configuration throughout your app.

However, you retain flexibility with each *Map* component, as any options you pass directly to a *Map* instance will override the global settings.

This gives each map full customization capability when needed while maintaining the convenience of global defaults.
