import Edusex from "@/assets/images/projects/edusex.png";
import { generateArray } from "@/utils/array";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="flex w-full max-w-[800px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg px-6 py-8 overflow-hidden">
      <div className="w-1/2 flex flex-col pr-6">
        <h3 className="font-semibold text-xl mb-3">Edusex Website</h3>
        <p className="line-clamp-5 mb-12 text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi
          dolorum dolores sint suscipit incidunt, hic officia vero ipsum culpa
          atque? Quam, non iste? Enim asperiores suscipit eum neque minima!
          atque? Quam, non iste? Enim asperiores suscipit eum neque minima!
          atque? Quam, non iste? Enim asperiores suscipit eum neque minima!
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {generateArray(5, "React.js").map((row, idx) => (
            <span
              key={idx}
              className="text-sm border-[0.5px] px-2 py-1 rounded bg-gray-800 text-white"
            >
              React.js
            </span>
          ))}
        </div>
      </div>
      <div className="w-1/2 relative">
        <div className="rounded-lg w-[500px] overflow-hidden absolute top-0 left-0">
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
