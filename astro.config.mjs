import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import vercel from '@astrojs/vercel/static';


export default defineConfig({
  adapter: vercel(),
  //integrations: [icon()],
});