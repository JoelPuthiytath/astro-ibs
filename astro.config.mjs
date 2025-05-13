// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      noExternal: ["gsap", "gsap/ScrollTrigger"],
    },
    resolve: {
      alias: {
        // Redirect Next.js Link import to your Astro-friendly Link
        'next/link': fileURLToPath(new URL('./src/components/Link.jsx', import.meta.url)),
      },
    },
  },
});
