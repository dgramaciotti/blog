import { ejsPlugin, sitemapPlugin, articlePlugin, tailwindPlugin } from "basic-ssg";
import { assetsPlugin } from "@basic-ssg/plugin-assets";
import { categoryPlugin } from "./categoryPlugin.js";
import { customBlogPlugin } from "./customBlogPlugin.js";

export default {
  root: "pages",
  outDir: "dist",
  plugins: [
    assetsPlugin(),
    ejsPlugin(),
    tailwindPlugin(),
    sitemapPlugin(),
    articlePlugin({
      mdPaths: "posts/**/*.md"
    }),
    customBlogPlugin({
      mdPaths: "posts/**/*.md"
    }),
    categoryPlugin(),
  ],
  siteUrls: {
    blog: "https://dgramaciotti.github.io",
  },
};
