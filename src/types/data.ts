import { StaticImageData } from "next/image";

export type CompanyData = {
  name: string;
  websiteURL?: string;
  logo: StaticImageData;
  about: string;
};

export type ProjectScreenshots = {
  interfaceType: "mobile" | "desktop";
  images: StaticImageData[];
};

export type ProjectData = {
  name: string;
  description?: React.ReactNode;
  screenshots: ProjectScreenshots[];
};

export type ExperienceData = {
  jobTitle: string;
  company: CompanyData;
  location: string;
  startDate: string;
  endDate?: string;
  description: React.ReactNode;
  id: string;
  projects?: ProjectData[];
};
