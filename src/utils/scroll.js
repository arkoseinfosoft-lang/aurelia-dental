/**
 * Smoothly scrolls to a target section by hash or element ID, accounting for the fixed navbar height.
 * Works reliably across desktop and mobile browsers.
 */
export function scrollToSection(href, offset = 80) {
  if (!href) return;
  const targetId = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(targetId);
  if (!el) return;

  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = Math.max(0, elementPosition - offset);

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
