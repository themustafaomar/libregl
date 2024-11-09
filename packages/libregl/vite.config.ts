import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['es'],
      name: 'libregl',
      fileName: 'libregl.esm',
      entry: resolve(__dirname, './src/index.ts'),
    },
    rollupOptions: {
      external: ['vue', 'maplibre-gl'],
    },
  },
})
