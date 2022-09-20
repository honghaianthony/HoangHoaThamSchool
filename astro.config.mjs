import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://hoang-hoa-tham-school.vercel.app/",
    integrations: [tailwind(), react(), image(), sitemap()],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
