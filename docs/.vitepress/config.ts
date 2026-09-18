import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ming Hin's website",
  description: "My personal website",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    sidebar: {
      "/posts/": [
        {
          text: "Posts",
          items: [
            { text: "Hello, World!", link: "/posts/hello-world" },
            { text: "AI info sites", link: "/posts/ai-research" },
            { text: "Social media", link: "/posts/social-media" },
            { text: "Incremental games", link: "/posts/incremental-games" },
            { text: "Minecraft modpack", link: "/posts/minecraft-modpack" },
            { text: "Puzzpals", link: "/posts/puzzpals" },
            { text: "Andon FM", link: "/posts/andon-radio" },
            { text: "Caveats of AI", link: "/posts/ai-caveats" },
          ],
        },
      ],
    },
    footer: {
      copyright: `This website's content © 2026 by minghinshi is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>`,
    },
  },
});
