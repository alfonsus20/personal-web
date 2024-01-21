import Contact from "@/sections/home/Contact";
import Experience from "@/sections/home/Experience";
import Hero from "@/sections/home/Hero";
import Projects from "@/sections/home/Projects";
import Skills from "@/sections/home/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
