import experienceList from "@/data/experience";
import Image from "next/image";
import { notFound } from "next/navigation";

import Project1 from "@/assets/images/experience/garena/projects/lucky-spin.png";

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

const InternshipDetail = ({ params: { id } }: { params: { id: string } }) => {
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
        <div>{company.about}</div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
        <div>{description}</div>
      </section>
      {projects && projects.length > 0 && (
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-decimal pl-6 space-y-8">
            {projects.map((project, idx) => (
              <li className="text-xl font-semibold" key={idx}>
                <h3 className="mb-3">{project.name}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, screenshotIdx) => (
                    <Image
                      key={screenshotIdx}
                      src={screenshot}
                      alt={`${project.name}-${screenshotIdx}`}
                      width={640}
                      height={360}
                      className="col-span-1 object-top object-cover"
                      placeholder="blur"
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="hidden">
        <h2 className="text-2xl font-semibold mb-4">Memories</h2>
        <div className="grid gap-2 grid-cols-12 grid-rows-12 aspect-square">
          <div className="bg-red-400 col-span-8 row-span-6">
            <Image
              src={Project1}
              alt="project1"
              width={1200}
              height={675}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-green-500 col-span-4 row-span-6">
            <Image
              src={Project1}
              alt="project1"
              width={1200}
              height={675}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-yellow-400 col-span-4 row-span-6"></div>
          <div className="bg-purple-500 col-span-8 row-span-6"></div>
        </div>
      </section>
    </div>
  );
};

export default InternshipDetail;
