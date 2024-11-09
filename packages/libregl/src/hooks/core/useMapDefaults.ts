import { LibreGLOptions } from 'src'
import { getCurrentInstance } from 'vue'

export function useMapDefaults() {
  const instance = getCurrentInstance()
  if (!instance) {
    return {} as LibreGLOptions
  }

  const config = instance.appContext.config.globalProperties.$libregl
  if (!config) {
    return {} as LibreGLOptions
  }

  return config
}
