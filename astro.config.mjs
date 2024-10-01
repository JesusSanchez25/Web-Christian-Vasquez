import { defineConfig } from 'astro/config';
import icon from "astro-icon";
// import vercelAdapter from '@astrojs/vercel/serverless';

export default defineConfig({
  // output: 'server',
  // adapter: vercelAdapter(),
  integrations: [icon()],
  build: {
    inlineStylesheets: "always",
  }
});
