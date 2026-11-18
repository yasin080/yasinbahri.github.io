// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages
// - Repo named "yasin080.github.io": keep `site` as is and no `base`.
// - Any other repo name (e.g. "portfolio"): add `base: '/portfolio'`.
// - Custom domain (e.g. yasinbahri.dev): set `site` to it, no `base`, and add public/CNAME.
export default defineConfig({
  site: 'https://yasin080.github.io',
  trailingSlash: 'ignore',
});
