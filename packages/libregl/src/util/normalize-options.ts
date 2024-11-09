export function normalizeOptions(options: any) {
  return Object.keys(options)
    .filter((key) => options[key as keyof typeof options] !== undefined)
    .reduce(
      (acc, key) => {
        const value = options[key as keyof typeof options]
        // @ts-ignore
        acc[key] = value as typeof value
        return acc
      },
      {} as Partial<typeof options>
    )
}
