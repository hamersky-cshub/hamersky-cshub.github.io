/**
 * Language-picker dropdowns for downloads on the learning-hub module pages:
 * the video "Subtitles" button and the "Download" button of materials that
 * exist in several languages.
 *
 * Markup contract (see the materials and featured-video blocks in each
 * module's content.astro):
 *   <button data-download-trigger aria-expanded="false" aria-controls="<menu id>">…</button>
 *   <ul id="<menu id>" data-download-menu hidden> <li><a download>…</a></li> … </ul>
 *
 * While open, the list is moved to <body> and positioned with `position: fixed`.
 * This keeps it from being clipped by the part card (`overflow: hidden`) or
 * mispositioned by the card's hover `transform`. It is put back next to its
 * button when closed.
 */

interface ActiveMenu {
  trigger: HTMLButtonElement
  menu: HTMLElement
  placeholder: Comment
}

let active: ActiveMenu | null = null
let globalListenersBound = false

const GAP = 6
const EDGE = 8

const positionMenu = () => {
  if (!active) return
  const { trigger, menu } = active
  const rect = trigger.getBoundingClientRect()

  menu.style.minWidth = `${rect.width}px`
  const menuHeight = menu.offsetHeight
  const menuWidth = menu.offsetWidth

  let top = rect.bottom + GAP
  const fitsBelow = top + menuHeight <= window.innerHeight - EDGE
  const fitsAbove = rect.top - GAP - menuHeight >= EDGE
  if (!fitsBelow && fitsAbove) top = rect.top - GAP - menuHeight

  const left = Math.max(EDGE, Math.min(rect.left, window.innerWidth - menuWidth - EDGE))

  menu.style.top = `${Math.round(top)}px`
  menu.style.left = `${Math.round(left)}px`
}

const closeMenu = (returnFocus = false) => {
  if (!active) return
  const { trigger, menu, placeholder } = active
  active = null

  menu.hidden = true
  menu.style.top = ''
  menu.style.left = ''
  menu.style.minWidth = ''
  if (placeholder.parentNode) placeholder.replaceWith(menu)
  else menu.remove()

  trigger.setAttribute('aria-expanded', 'false')
  if (returnFocus) trigger.focus()
}

const menuLinks = (menu: HTMLElement) => Array.from(menu.querySelectorAll<HTMLAnchorElement>('a[href]'))

const openMenu = (trigger: HTMLButtonElement, menu: HTMLElement, focusFirst = false) => {
  if (active?.trigger === trigger) return
  closeMenu()

  const placeholder = document.createComment('download-menu')
  menu.before(placeholder)
  document.body.appendChild(menu)
  menu.hidden = false
  trigger.setAttribute('aria-expanded', 'true')
  active = { trigger, menu, placeholder }
  positionMenu()

  if (focusFirst) menuLinks(menu)[0]?.focus()
}

const bindGlobalListeners = () => {
  if (globalListenersBound) return
  globalListenersBound = true

  document.addEventListener('pointerdown', (event) => {
    if (!active) return
    const target = event.target as Node
    if (active.menu.contains(target) || active.trigger.contains(target)) return
    closeMenu()
  })

  window.addEventListener('resize', positionMenu)
  window.addEventListener('scroll', positionMenu, { capture: true, passive: true })

  // Put the menu back before Astro swaps the page on client-side navigation.
  document.addEventListener('astro:before-swap', () => closeMenu())
}

export const initDownloadMenus = () => {
  bindGlobalListeners()

  document.querySelectorAll<HTMLButtonElement>('[data-download-trigger]').forEach((trigger) => {
    if (trigger.dataset.downloadMenuBound === 'true') return
    const menuId = trigger.getAttribute('aria-controls')
    const menu = menuId ? document.getElementById(menuId) : null
    if (!menu) return
    trigger.dataset.downloadMenuBound = 'true'

    trigger.addEventListener('click', () => {
      if (active?.trigger === trigger) closeMenu()
      else openMenu(trigger, menu)
    })

    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        openMenu(trigger, menu, true)
      } else if (event.key === 'Escape' && active?.trigger === trigger) {
        closeMenu(true)
      }
    })

    menu.addEventListener('keydown', (event) => {
      const links = menuLinks(menu)
      const index = links.indexOf(document.activeElement as HTMLAnchorElement)

      switch (event.key) {
        case 'Escape':
          event.preventDefault()
          closeMenu(true)
          break
        case 'Tab':
          // Hand focus back to the button; the browser then moves on naturally.
          closeMenu(true)
          break
        case 'ArrowDown':
          event.preventDefault()
          links[(index + 1) % links.length]?.focus()
          break
        case 'ArrowUp':
          event.preventDefault()
          links[(index - 1 + links.length) % links.length]?.focus()
          break
        case 'Home':
          event.preventDefault()
          links[0]?.focus()
          break
        case 'End':
          event.preventDefault()
          links[links.length - 1]?.focus()
          break
      }
    })

    // Close after the download has started (let the click's default action run first).
    menu.addEventListener('click', (event) => {
      if ((event.target as Element).closest('a')) setTimeout(() => closeMenu(true), 0)
    })
  })
}
