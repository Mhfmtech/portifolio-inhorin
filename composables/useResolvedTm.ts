/**
 * `tm()` pode devolver nós AST compilados (objetos com type/loc/source) em vez de strings.
 * Este helper aplica `rt()` recursivamente para obter texto exibível.
 */
export function useResolvedTm() {
  const { tm, rt } = useI18n()

  function isAstLike(val: unknown): val is Record<string, unknown> {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) return false
    const o = val as Record<string, unknown>
    return (
      typeof o.type === 'number' &&
      ('loc' in o || 'static' in o || 'source' in o || 'body' in o)
    )
  }

  function resolveDeep(val: unknown): unknown {
    if (val === null || val === undefined) return val
    if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
      return val
    }
    if (Array.isArray(val)) {
      return val.map((item) => resolveDeep(item))
    }
    if (typeof val === 'object') {
      if (isAstLike(val)) {
        try {
          return rt(val as Parameters<typeof rt>[0])
        } catch {
          return val
        }
      }
      const o = val as Record<string, unknown>
      const out: Record<string, unknown> = {}
      for (const key of Object.keys(o)) {
        out[key] = resolveDeep(o[key])
      }
      return out
    }
    return val
  }

  function resolvedTm(key: string) {
    return resolveDeep(tm(key))
  }

  return { resolvedTm, resolveDeep }
}
