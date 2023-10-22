"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import MyPhoto from "@/assets/images/photo.jpg";
import { EMAIL_LINK } from "@/data/links";
import useSectionInView from "@/hooks/useSectionInView";

const Hero = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-end mx-auto max-w-screen-xl gap-6 min-h-[calc(100vh-6rem)] pt-4 md:pt-0 pb-10 px-4 sm:px-6 2xl:px-0 scroll-m-[100vh]"
    >
      <div className="w-full md:w-7/12 lg:w-2/3">
        <div className="mb-7">
          <h2 className="font-semibold text-lg mb-4">
            Hi, I&apos;m Alfonsus Avianto 👋
          </h2>
          <h1 className="font-bold text-5xl mb-5">Frontend Engineer</h1>
          <p className="text-lg">
            A computer science graduate from the University of Brawijaya.
            I&apos;m a frontend engineer with a passion for crafting intuitive
            and engaging user experiences. With expertise in React, Vue,
            Next.js, and TypeScript, I thrive in developing performant and
            scalable web applications.
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            rightIcon={<AiOutlineMail className="text-xl" />}
            href={EMAIL_LINK}
          >
            Contact Me
          </Button>
          <Button
            variant="secondary"
            rightIcon={<BsArrowUpRight className="text-lg" />}
            href="#portfolio"
          >
            My Portfolio
          </Button>
        </div>
      </div>
      <div className="w-full md:w-5/12 lg:w-1/3">
        <Image
          src={MyPhoto}
          alt="Alfonsus Avianto"
          width={1200}
          height={1600}
          className="w-full lg:max-w-[400px] h-full aspect-[16/10] object-cover object-center md:aspect-[3/4] md:ml-auto rounded"
          placeholder="blur"
          priority
        />
      </div>
    </section>
  );
};
export default Hero;
