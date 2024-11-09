---
title: Installation
metadata:
  title: Installation
  description: This section clear the possible ways to install libregl.
---

This section covers how to install and set up libregl, the following steps will guide you through the installation process.

## Installation

To get started with libregl, you can install it through your preferred package manager or include it directly from a CDN for quick integration.

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

## Licence

The `libregl` library is released under the permissive MIT License.

This means you have the freedom to use, modify, and distribute the framework in your projects, with minimal restrictions. Check out the LICENSE file for more details.
