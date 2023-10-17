import Heading from "@/components/Heading";
import { generateArray } from "@/utils/array";

interface SkillRowProps {
  skills: string[];
  title: string;
}

const SkillRow = ({ title, skills }: SkillRowProps) => {
  return (
    <div className="flex gap-x-20">
      <div className="font-bold text-xl">{title}</div>
      <div className="flex flex-auto flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <span
            className="px-4 py-2 text-center border-gray-600 border-[1px] rounded-lg cursor-pointer text-sm font-medium"
            key={idx}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="mx-auto max-w-screen-xl pb-24">
      <Heading
        title="Skills"
        subtitle="Tech Stack I Currently Use"
        position="left"
      />
      <div className="space-y-8">
        {generateArray(3, {
          title: "Frontend",
          skills: generateArray(12, "React.js"),
        }).map((row, idx) => (
          <SkillRow key={idx} {...row} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
