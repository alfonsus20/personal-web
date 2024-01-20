"use client";

import Heading from "@/components/Heading";
import skillSet from "@/data/skills";
import useSectionInView from "@/hooks/useSectionInView";
import { MotionProps, motion } from "framer-motion";

interface SkillRowProps {
  skills: string[];
  title: string;
}

const skillRowAnim: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  variants: {
    visible: {
      transition: {
        staggerChildren: 0.075,
      },
    },
  },
  viewport: {
    once: true,
  },
};

const skillItemAnim: MotionProps = {
  variants: {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  viewport: {
    once: true,
  },
};

const SkillRow = ({ title, skills }: SkillRowProps) => {
  return (
    <section className="flex flex-col md:flex-row gap-x-20 gap-y-4 px-4 sm:px-6 2xl:px-0">
      <div className="font-bold text-xl w-60 flex-shrink-0">{title}</div>
      <motion.div {...skillRowAnim} className="flex flex-auto flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <motion.span
            {...skillItemAnim}
            className="px-4 py-2 text-center border-gray-600 border-[1px] rounded cursor-pointer text-sm font-medium"
            key={idx}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mx-auto max-w-screen-xl pb-12 md:pb-20"
      id="skills"
    >
      <Heading title="Skills" subtitle="Tech Stack I Use" position="left" />
      <div className="space-y-8">
        {skillSet.map((skill, idx) => (
          <SkillRow key={idx} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
