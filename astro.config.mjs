import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import vercelAdapter from '@astrojs/vercel/serverless'; // Cambia a 'serverless'

import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import vercelAdapter from '@astrojs/vercel/serverless'; // Adaptador correcto para SSR

export default defineConfig({
  // output: 'server',
  // adapter: vercelAdapter(),
  integrations: [icon()],
  build: {
    inlineStylesheets: "always", 
  }
});
