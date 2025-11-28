// @ts-check
import { defineConfig } from "astro/config";
import astroIcon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://manifest.science",
  integrations: [astroIcon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
