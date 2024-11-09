let uid = 0
export function generateUid(prefix: string) {
  return String(`${prefix}-${++uid}`)
}
