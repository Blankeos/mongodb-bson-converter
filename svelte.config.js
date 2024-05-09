import adapter from '@sveltejs/adapter-cloudflare';
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
    // Just the default settings: https://kit.svelte.dev/docs/adapter-cloudflare
    adapter: adapter({
      // See below for an explanation of these options
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    }),
    alias: {
      // this will match src
      '@': 'src'
    }
  }
};

export default config;
