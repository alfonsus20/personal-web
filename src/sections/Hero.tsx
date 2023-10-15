import Button from "@/components/Button";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex items-center mx-auto max-w-screen-xl gap-x-8">
      <div className="w-1/2">
        <div className="mb-7">
          <h2 className="font-semibold text-lg mb-4">
            Hi, I&apos;m Alfonsus Avianto 👋
          </h2>
          <h1 className="font-bold text-5xl mb-5">Frontend Web Engineer</h1>
          <p className="text-lg">
            A computer science graduate from the University of Brawijaya.
            I&apos;m a frontend engineer with a passion for crafting intuitive
            and engaging user experiences. With expertise in React, Vue,
            Next.js, and TypeScript, I thrive in developing performant and
            scalable web applications.
          </p>
        </div>
        <div className="flex gap-4">
          <Button rightIcon={<AiOutlineMail className="text-xl" />}>
            Contact Me
          </Button>
          <Button
            variant="secondary"
            rightIcon={<BsArrowUpRight className="text-lg" />}
          >
            My Portfolio
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <div className="">
          <div className="h-[500px] mx-auto bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
