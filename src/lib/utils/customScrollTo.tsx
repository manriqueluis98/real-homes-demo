export function customScrollTo(sectionId: string) {
  document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
