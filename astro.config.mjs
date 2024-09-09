import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import vercel from '@astrojs/vercel/serverless';


export default defineConfig({
  output: 'server',
  adapter: vercel({
    imageService: true,
  }),
  integrations: [icon()],
});