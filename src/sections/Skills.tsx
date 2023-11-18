"use client";

import Heading from "@/components/Heading";
import skillSet from "@/data/skills";
import useSectionInView from "@/hooks/useSectionInView";
import { getAnimationProps } from "@/utils/animation";
import { MotionProps, motion } from "framer-motion";

interface SkillRowProps {
  skills: string[];
  title: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillRow = ({ title, skills }: SkillRowProps) => {
  return (
    <motion.section
      // {...skillsRowProps}
      className="flex flex-col md:flex-row gap-x-20 gap-y-4 px-4 sm:px-6 2xl:px-0"
    >
      <div className="font-bold text-xl w-60 flex-shrink-0">{title}</div>
      <motion.div
        className="flex flex-auto flex-wrap gap-3"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        {skills.map((skill, idx) => (
          <motion.span
            className="px-4 py-2 text-center border-gray-600 border-[1px] rounded cursor-pointer text-sm font-medium"
            key={idx}
            variants={item}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mx-auto max-w-screen-xl pb-12 md:pb-20 scroll-m-28"
      id="skills"
    >
      <Heading title="Skills" subtitle="Tech Stack I Use" position="left" />
      <motion.ul
        // viewport={{ once: true }}
        transition={
          {
            // delayChildren: 2,
            // staggerChildren: 0.4,
            // staggerDirection: 1,
            // opacity: 1,
          }
        }
        // initial={{ opacity: 0 }}
        className="space-y-8"
      >
        {skillSet.map((skill, idx) => (
          <SkillRow key={idx} {...skill} />
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
