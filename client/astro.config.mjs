import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://anastasiiapavliuk.be/",
    base: "grapefestival",
    image: {
        domains: ["localhost:4321/"],
    },
});
