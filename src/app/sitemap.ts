import { PRODUCTION_URL } from "@/constants";
import EXPERIENCE_DATA from "@/data/experience";

export default function sitemap() {
  const experiences = EXPERIENCE_DATA.map((experience) => ({
    url: `${PRODUCTION_URL}/experience/${experience.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [
    {
      url: `${PRODUCTION_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...experiences,
  ];
}
