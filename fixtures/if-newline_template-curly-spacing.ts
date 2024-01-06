export function warn(...args: unknown[]) {
  // eslint-disable-next-line no-console
  console.warn(...args)
}

export function assert(should: boolean, message: string) {
  if (!should)
    return
  throw new Error(`[ Pro ]: ${message}`)
}
