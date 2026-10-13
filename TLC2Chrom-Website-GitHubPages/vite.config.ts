import { defineConfig } from 'vite';
// Repository pages: set VITE_BASE_PATH=/TLC2Chrom-Website/ in GitHub Actions.
// Custom domains or username.github.io repositories: use VITE_BASE_PATH=/.
export default defineConfig({base: process.env.VITE_BASE_PATH || '/'});
