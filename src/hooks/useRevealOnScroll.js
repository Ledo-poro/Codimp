import { useEffect, useRef } from 'react'

/**
 * Reveals elements with the given selector when they enter the viewport.
 * Adds the `reveal-visible` class to each element.
 */
export default function useRevealOnScroll({ selector = '[data-reveal]', rootMargin = '0px 0px -10% 0px' } = {}) {
  const observerRef = useRef(null)

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(selector))
    if (!nodes.length) return

    // If IntersectionObserver isn't supported, just show everything.
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('reveal-visible'))
      return
    }

    observerRef.current?.disconnect()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { root: null, rootMargin, threshold: 0.08 }
    )

    nodes.forEach((n) => observer.observe(n))

    return () => observer.disconnect()
  }, [selector, rootMargin])
}

