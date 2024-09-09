import { defineConfig } from 'astro/config';
import icon from "astro-icon";

adapter: vercel({
  imageService: true,
});

export default defineConfig({
  integrations: [icon()],
});