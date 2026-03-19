import experienceList from "@/data/experience";
import Image from "next/image";
import { notFound } from "next/navigation";
import clsx from "clsx";

import Project1 from "@/assets/images/experience/garena/projects/lucky-spin.png";
import ProjectCard from "@/components/experience/ProjectCard";

export const generateStaticParams = () => {
  return experienceList.map((exp) => ({
    params: {
      id: exp.id,
    },
  }));
};

const getExperience = (id: string) => {
  const experience = experienceList.find((exp) => exp.id === id);
  return experience;
};

const ExperienceDetail = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;

  const {
    id
  } = params;

  const experience = getExperience(id);

  if (!experience) {
    return notFound();
  }

  const { company, description, jobTitle, startDate, endDate, projects } =
    experience;

  return (
    <div className="max-w-screen-xl mx-auto pt-6 pb-10 px-4 sm:px-6 2xl:px-0 space-y-10">
      <section className="flex gap-10 items-center flex-col sm:flex-row justify-center sm:justify-normal">
        <Image
          src={company.logo}
          alt={company.name}
          width={250}
          height={250}
          className="aspect-square object-contain shadow-lg rounded-lg p-2"
          placeholder="blur"
        />
        <div className="mb-2 md:mb-10 text-center sm:text-left">
          <h1 className="font-semibold text-3xl mb-2">{jobTitle}</h1>
          <div className="inline-flex gap-1.5">
            <span>{company.name}</span>
            <span>•</span>
            <span>
              {startDate} - {endDate || "present"}
            </span>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">About the Company</h2>
        <div className="text-justify">{company.about}</div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
        <div className="text-justify">{description}</div>
      </section>
      {projects && projects.length > 0 && (
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-decimal pl-6 space-y-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ExperienceDetail;
