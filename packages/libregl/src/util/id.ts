import { generateUid } from './uid'

export function id(prefix: string) {
  return {
    type: String,
    default: () => generateUid(prefix),
  }
}
