const lenis = new Lenis({
  smooth: true,
  lerp: 0.08
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Scroll Animations
gsap.utils.toArray('.panel').forEach(panel => {
  gsap.from(panel, {
    opacity: 0,
    scale: 0.9,
    scrollTrigger: {
      trigger: panel,
      start: 'top 80%',
      scrub: true
    }
  });
});
