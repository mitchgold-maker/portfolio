# mitchell-portfolio

Mitchell Goldman's engineering portfolio — a static, no-build-step HTML/CSS/JS
site (see [`~/.claude/skills/build-modular-website`](../.claude/skills/build-modular-website)
for the reusable process/skill this was built with).

## Structure

```
index.html
css/
  base.css          -- design tokens, reset, shared primitives
  layout.css        -- section shells
  components/        -- one stylesheet per section
js/
  main.js           -- wires up all modules
  modules/           -- one file per behavior (nav, reveal, kinetic type,
                         particles, magnetic buttons, gallery tabs)
assets/
  Mitchell_Goldman_Resume.pdf
```

## Local preview

No build step — just serve the folder statically, e.g.:

```bash
python -m http.server 8000
```

then open http://localhost:8000.

## Deploy

Hosted on GitHub Pages. See the skill's
[deploy-checklist.md](../.claude/skills/build-modular-website/references/deploy-checklist.md)
for the full process.

## Updating content

- **Résumé**: replace `assets/Mitchell_Goldman_Resume.pdf` (keep the filename,
  or update the `href`s in `index.html`).
- **Projects**: each project is a self-contained `<article class="project-card">`
  block in the Projects section of `index.html` — copy/paste one and edit.
- **Photos**: project cards currently use generated SVG/gradient visuals as
  placeholders instead of real photos. Swap a `.project-visual` div's inner
  `<svg>`/background for an `<img>` (remember `width`/`height` and
  `loading="lazy"`) once real photos are ready.
