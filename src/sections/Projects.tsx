import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section className="mx-auto max-w-screen-xl pb-24 px-6 2xl:px-0">
      <Heading
        title="Portfolio"
        subtitle="Selected Projects"
        position="center"
      />
      <div className="flex flex-col items-center space-y-12">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
