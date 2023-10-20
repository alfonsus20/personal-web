import Edusex from "@/assets/images/projects/edusex.png";
import { generateArray } from "@/utils/array";
import Image from "next/image";
import { FaLink, FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full max-w-[800px] shadow-next rounded-lg md:px-6 md:py-8 overflow-hidden">
      <div className="md:w-1/2 flex flex-col pt-3 pb-8 md:py-0 md:pr-6 px-6 md:px-0">
        <h3 className="font-semibold text-xl mb-3">Edusex Website</h3>
        <p className="line-clamp-5 mb-4 md:mb-12 text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi
          dolorum dolores sint suscipit incidunt, hic officia vero ipsum culpa
          atque? Quam, non iste? Enim asperiores suscipit eum neque minima!
          atque? Quam, non iste? Enim asperiores suscipit eum neque minima!
          atque? Quam, non iste? Enim asperiores suscipit eum neque minima!
        </p>
        <div className="md:mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {generateArray(4, "React.js").map((row, idx) => (
              <span
                key={idx}
                className="text-sm border-[0.5px] px-2 py-1 rounded bg-gray-800 text-white"
              >
                React.js
              </span>
            ))}
          </div>
          <div className="flex gap-3 text-2xl">
            <FaGithub />
            <FaLink />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="rounded-lg md:w-[500px] overflow-hidden md:absolute top-0 left-0">
          <Image
            src={Edusex}
            width={1000}
            height={750}
            alt="edusex"
            placeholder="blur"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;