import { prefersReducedMotion } from "./utils.js";

// Ambient particle field for the hero canvas. Only animates while the
// canvas is intersecting the viewport, and never runs under
// prefers-reduced-motion.
export function initParticles(selector = "#hero-canvas") {
  const canvas = document.querySelector(selector);
  if (!canvas || prefersReducedMotion()) return;

  const ctx = canvas.getContext("2d");
  let w, h, particles, raf;

  const palette = ["rgba(53,224,161,0.55)", "rgba(77,159,255,0.4)"];

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = canvas.clientWidth * dpr;
    h = canvas.height = canvas.clientHeight * dpr;
  };

  const spawn = () =>
    Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.4,
      c: palette[Math.floor(Math.random() * palette.length)],
    }));

  const tick = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.fillStyle = p.c;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      resize();
      particles = particles || spawn();
      cancelAnimationFrame(raf);
      tick();
    } else {
      cancelAnimationFrame(raf);
    }
  });
  io.observe(canvas);

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });
}
