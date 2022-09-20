import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://hoang-hoa-tham-school.vercel.app/",
    experimental: {
        integrations: true,
    },
    integrations: [tailwind(), react(), image(), sitemap(), robotsTxt()],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
