import Heading from "@/components/Heading";
import skillSet from "@/data/skills";

interface SkillRowProps {
  skills: string[];
  title: string;
}

const SkillRow = ({ title, skills }: SkillRowProps) => {
  return (
    <section className="flex flex-col md:flex-row gap-x-20 gap-y-4 px-6 2xl:px-0">
      <div className="font-bold text-xl w-60 flex-shrink-0">{title}</div>
      <div className="flex flex-auto flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <span
            className="px-4 py-2 text-center border-gray-600 border-[1px] rounded cursor-pointer text-sm font-medium"
            key={idx}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section className="mx-auto max-w-screen-xl pb-12 md:pb-20">
      <Heading
        title="Skills"
        subtitle="Tech Stack I Use"
        position="left"
      />
      <div className="space-y-8">
        {skillSet.map((skill, idx) => (
          <SkillRow key={idx} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
