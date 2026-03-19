import { PRODUCTION_URL } from "@/constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PRODUCTION_URL}/sitemap.xml`,
  };
}
