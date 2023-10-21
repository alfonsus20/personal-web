import ExperienceCard from "@/components/Experience";
import Heading from "@/components/Heading";
import experienceList from "@/data/experience";

const Experience = () => {
  return (
    <section className="mx-auto max-w-[52rem] py-12 md:py-20 px-6 2xl:px-0">
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
