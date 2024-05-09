import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  onwarn: (warning, handler) => {
    if (warning.code === 'element_invalid_self_closing_tag') return;

    handler(warning);
  },
  kit: {
    adapter: adapter({
      fallback: 'index.html' // may differ from host to host
    }),
    alias: {
      // this will match src
      '@': 'src'
    }
  }
};

export default config;
