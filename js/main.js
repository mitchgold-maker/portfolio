import { initNav } from "./modules/nav.js";
import { initReveal } from "./modules/reveal.js";
import { initKinetic } from "./modules/kinetic.js";
import { initParticles } from "./modules/particles.js";
import { initMagnetic } from "./modules/magnetic.js";
import { initGalleryTabs } from "./modules/gallery-tabs.js";

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

initKinetic();
initNav();
initReveal();
initParticles();
initMagnetic();
initGalleryTabs();
