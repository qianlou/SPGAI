// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://mxzheng.github.io',
  base: '/DAC-26Workshop',
  integrations: [tailwind(), react()]
});
