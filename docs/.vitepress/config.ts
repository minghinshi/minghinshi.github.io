import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ming Hin's website",
  description: "My personal website",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    footer: {
      copyright: `This website's content © 2026 by minghinshi is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>`,
    },
  },
});
