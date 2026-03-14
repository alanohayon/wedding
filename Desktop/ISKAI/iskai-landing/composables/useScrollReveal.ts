/**
 * Composable pour reveler les elements au scroll via IntersectionObserver.
 * Ajoute la classe 'visible' aux elements portant la classe 'reveal'
 * quand ils entrent dans le viewport (threshold 0.15), une seule fois.
 */
export function useScrollReveal() {
  const observer = ref<IntersectionObserver | null>(null)

  function observe(root?: HTMLElement | null) {
    if (import.meta.server) return

    const target = root ?? document
    const elements = target.querySelectorAll<HTMLElement>('.reveal')

    if (!elements.length) return

    observer.value = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.value?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )

    for (const el of elements) {
      observer.value.observe(el)
    }
  }

  function cleanup() {
    observer.value?.disconnect()
    observer.value = null
  }

  onMounted(() => {
    observe()
  })

  onBeforeUnmount(() => {
    cleanup()
  })

  return { observe, cleanup }
}
