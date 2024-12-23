import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "*",
    },
    sitemap: "https://mahd.comboompunksucht.app/sitemap",
  };
}
