// Splits text in [data-kinetic] elements into per-letter spans with a
// staggered CSS entrance animation, while keeping the real text available
// to assistive tech via aria-label on the parent.
export function initKinetic() {
  document.querySelectorAll("[data-kinetic]").forEach((el) => {
    const text = el.textContent.trim();
    el.setAttribute("aria-label", text);
    el.setAttribute("aria-hidden", "false");
    el.innerHTML = "";
    const wrap = document.createElement("span");
    wrap.setAttribute("aria-hidden", "true");
    text.split("").forEach((ch, i) => {
      const span = document.createElement("span");
      span.textContent = ch === " " ? " " : ch;
      span.style.setProperty("--i", i);
      wrap.appendChild(span);
    });
    el.appendChild(wrap);
  });
}
