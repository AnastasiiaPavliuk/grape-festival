import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://anastasiiapavliuk.be/",
    base: "Grape-Festival",
    image: {
        domains: ["localhost:4321/"],
    },
});
