import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import projectList from "@/data/projects";

const Projects = () => {
  return (
    <section
      className="mx-auto max-w-screen-xl pb-12 md:pb-20 px-6 2xl:px-0"
      id="portfolio"
    >
      <Heading
        title="Portfolio"
        subtitle="Selected Projects"
        position="center"
      />
      <div className="flex flex-col items-center space-y-12">
        {projectList.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
