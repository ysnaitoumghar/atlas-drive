import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployment settings come from environment variables so the same code works
// on Vercel (defaults) and GitHub Pages (see README / .github/workflows).
//   SITE=https://<user>.github.io  BASE=/<repo>
export default defineConfig({
  site: process.env.SITE || 'https://atlas-drive-demo.vercel.app',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
