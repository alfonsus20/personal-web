"use client";

import ExperienceCard from "@/components/Experience";
import Heading from "@/components/Heading";
import experienceList from "@/data/experience";
import useSectionInView from "@/hooks/useSectionInView";

const Experience = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      ref={ref}
      className="mx-auto max-w-[52rem] mt-12 md:mt-20 pb-12 md:pb-20 px-4 sm:px-6 2xl:px-0 scroll-m-28"
      id="experience"
    >
      <Heading title="Experience" subtitle="Glympse of My Career Journey" />
      <div className="mx-auto max-w-4xl relative">
        {experienceList.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            jobTitle={exp.jobTitle}
            description={exp.description}
            startDate={exp.startDate}
            endDate={exp.endDate}
            companyName={exp.company.name}
            companyWebsite={exp.company.websiteURL}
            location={exp.location}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
