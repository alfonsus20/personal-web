import { ProjectData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({
  name,
  desc,
  githubLink,
  hostingLink,
  image,
  technologies,
}: ProjectData) => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full max-w-[800px] shadow-next rounded-lg md:px-6 md:py-8 overflow-hidden group">
      <div className="md:w-1/2 flex flex-col pt-3 pb-8 md:py-0 md:pr-6 px-6 md:px-0">
        <h3 className="font-semibold text-xl mb-3">{name}</h3>
        <p className="line-clamp-6 mb-4 md:mb-12 text-sm text-gray-700">
          {desc}
        </p>
        <div className="md:mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-sm border-[0.5px] px-2 py-1 rounded bg-gray-800 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 text-2xl">
            {githubLink && <Link href={githubLink} target='_blank'>{<FaGithub />}</Link>}
            {hostingLink && <Link href={hostingLink} target='_blank'>{<FaLink />}</Link>}
          </div>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="rounded-lg md:w-[600px] overflow-hidden md:absolute top-0 left-0 rotate-0 group-hover:-rotate-3 group-hover:shadow-next ease-in duration-100">
          <Image
            src={image}
            width={1000}
            height={750}
            alt={name}
            quality={80}
            placeholder="blur"
            className="h-full aspect-video object-cover object-left-top"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
