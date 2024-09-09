import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
  adapter: vercel({
    imageService: true,
  }),
  integrations: [icon()],
});