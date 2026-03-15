# Retro Systems Lab

Retro Systems Lab is an Astro + Starlight site for documenting experiments with vintage software platforms, old mobile toolchains, and preserved SDK archives.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content structure

```text
src/content/docs/
  hello-world.md
  docs/
  tools/
  archives/
  stories/
```

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

The Astro config derives the Pages base path from the GitHub repository name during the GitHub Actions build, so you can publish this from a repo like `retro-systems-lab` without changing the local folder name.

## Maintainer notes

Maintainer-only documentation lives in `dev-docs/` and is intentionally kept outside `src/content/docs/` so it is not published on the website.
