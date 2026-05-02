/**
 * `tm()` pode devolver nós AST compilados (Intlify / vue-i18n) em vez de strings.
 * Em produção o formato costuma usar chaves curtas: `{ "t": 0, "b": { ... } }`.
 * Este helper aplica `rt()` onde for nó de mensagem e percorre objetos/arrays.
 */
export function useResolvedTm() {
  const { tm, rt } = useI18n()

  /** Nó compilado (dev: type/loc; prod: t/b/i/s) */
  function isCompiledMessageNode(o: Record<string, unknown>): boolean {
    if (typeof o.t === 'number') return true
    if (
      typeof o.type === 'number' &&
      ('loc' in o || 'static' in o || 'source' in o || 'body' in o || 'b' in o || 's' in o)
    ) {
      return true
    }
    return false
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
      const o = val as Record<string, unknown>

      if (isCompiledMessageNode(o)) {
        try {
          const resolved = rt(val as Parameters<typeof rt>[0])
          if (typeof resolved === 'string') return resolved
          if (resolved != null && typeof resolved !== 'object') return String(resolved)
        } catch {
          /* tenta desmontar como objeto normal */
        }
      }

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
