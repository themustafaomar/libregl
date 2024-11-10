import { getCurrentInstance } from 'vue'
import { normalizeOptions } from '../../util'
import { LibreGLOptions } from '../..'

export function useMapOptions(props: Record<string, any>) {
  const { style, center, attributionControl, height, width, ...options } = props
  const instance = getCurrentInstance()
  const globals = instance?.appContext.config.globalProperties.$libregl

  function checkOption(options: Partial<LibreGLOptions>, key: keyof LibreGLOptions, value: any) {
    if (value !== undefined) {
      options[key] = value
    } else if (globals[key]) {
      options[key] = globals[key]
    }
  }

  checkOption(options, 'style', style)
  checkOption(options, 'center', center)
  checkOption(options, 'width', width)
  checkOption(options, 'height', height)
  checkOption(options, 'attributionControl', attributionControl)

  return normalizeOptions(options)
}
