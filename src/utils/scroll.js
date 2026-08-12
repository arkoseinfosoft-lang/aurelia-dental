/**
 * Smoothly scrolls to a target section by hash or element ID, accounting for the fixed navbar height.
 * Optimized for seamless touch response and scroll animation on mobile browsers.
 */
export function scrollToSection(href, offset = 76) {
  if (!href) return;
  const targetId = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(targetId);
  if (!el) return;

  const currentScroll = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
  const elementPosition = el.getBoundingClientRect().top + currentScroll;
  const offsetPosition = Math.max(0, Math.round(elementPosition - offset));

  // Small delay allows touch events and mobile menu collapse state to settle cleanly
  setTimeout(() => {
    try {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } catch (err) {
      window.scrollTo(0, offsetPosition);
    }
  }, 60);
}
