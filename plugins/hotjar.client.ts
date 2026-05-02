/**
 * Hotjar só no cliente — IDs em `runtimeConfig.public`
 * (sobrescritos por NUXT_PUBLIC_HOTJAR_SITE_ID e NUXT_PUBLIC_HOTJAR_SNIPPET_VERSION no .env).
 */
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const hjid = Number.parseInt(String(config.public.hotjarSiteId ?? ''), 10)
  const hjsv = Number.parseInt(String(config.public.hotjarSnippetVersion ?? '6'), 10)

  if (!Number.isFinite(hjid) || hjid <= 0) {
    return
  }

  const sv = Number.isFinite(hjsv) && hjsv > 0 ? hjsv : 6
  const w = window as Window & Record<string, unknown>

  // Snippet oficial Hotjar (fila antes do script externo)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(w as any).hj =
    (w as any).hj ||
    function (this: unknown) {
      // eslint-disable-next-line prefer-rest-params
      ;((w as any).hj.q = (w as any).hj.q || []).push(arguments)
    }
  ;(w as any)._hjSettings = { hjid, hjsv: sv }

  const head = document.getElementsByTagName('head')[0]
  if (!head) return

  const r = document.createElement('script')
  r.async = true
  r.src = `https://static.hotjar.com/c/hotjar-${hjid}.js?sv=${sv}`
  head.appendChild(r)
})
