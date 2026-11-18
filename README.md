# Yasin Bahri — portfolio

Personal portfolio: [yasin080.github.io](https://yasin080.github.io). English and Spanish, light and dark theme, one page per project.

Built with [Astro](https://astro.build) as a fully static site (no client framework) and deployed to GitHub Pages with GitHub Actions.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve dist/
```

## Where things are

```
src/
  content/projects/{en,es}/*.yaml   one file per project and language (text, stack, links, media)
  content.config.ts                 schema the project files are validated against
  i18n/ui.ts                        every other text of the site, in both languages, plus links
  components/                       Home, ProjectPage, Header, Footer, Media, ContactButtons
  layouts/Base.astro                <head>, theme, page transitions and the small client script
  pages/                            /, /projects/<slug>/, /es/, /es/projects/<slug>/, 404
  styles/global.css                 all the styles (CSS variables for both themes)
public/
  icons/   media/   cv/   favicon.svg
.github/workflows/deploy.yml        build + deploy to GitHub Pages on every push to main
```

- **Edit a project:** change `src/content/projects/en/<slug>.yaml` and its `es/` twin. Text between backticks is shown as code.
- **Add a project:** copy a YAML file in both folders and give it the next `order`. `featured: true` makes it a wide card with an image or video.
- **CV:** put the PDFs at `public/cv/Yasin-Bahri-CV-EN.pdf` (English pages) and `public/cv/Yasin-Bahri-CV-ES.pdf` (Spanish pages).

## Deploy to GitHub Pages

1. Create the repository **`yasin080.github.io`** and push this project to `main`. Commit `package-lock.json` too: the action uses it.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` builds and publishes the site.

Another repository name (e.g. `portfolio`) works too: add `base: '/portfolio'` in `astro.config.mjs`; the site will be at `yasin080.github.io/portfolio`.

**Custom domain:** set `site` in `astro.config.mjs` to the domain, add `public/CNAME` with the domain on one line, and point the DNS to GitHub Pages (Settings → Pages → Custom domain).

## Credits

Technology icons from [Devicon](https://devicon.dev) (MIT) and [Simple Icons](https://simpleicons.org) (CC0). Fonts: Geist and Geist Mono (SIL Open Font License), served by Google Fonts.
