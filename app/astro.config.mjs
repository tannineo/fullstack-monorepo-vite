import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    solidJs(),
    mdx(),
  ],

  output: 'server',
  adapter: node({
    mode: 'middleware',
  }),

  base: '/app',
  // WARN DONT split, make sure that the build to have a single entry.mjs for middleware mode
  // build: {
  //   split: true, // see: https://docs.astro.build/en/guides/server-side-rendering/#split-the-ssr-build-into-multiple-files
  // },
});
