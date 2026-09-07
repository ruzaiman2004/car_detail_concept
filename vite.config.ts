import { sites } from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
export default defineConfig({
  css: { postcss: { plugins: [tailwindcss()] } },
  // Keep Base UI and the app on one React instance, including during HMR.
  resolve: { dedupe: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'] },
  optimizeDeps: { include: ['react', 'react-dom', 'react/jsx-runtime', '@base-ui/react/dialog', '@base-ui/react/slider'] },
  plugins: [vinext(), sites()],
});
