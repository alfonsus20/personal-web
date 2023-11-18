"use client";

import MyPhoto from "@/assets/images/photo.jpg";
import Button from "@/components/Button";
import { EMAIL_LINK } from "@/data/links";
import useSectionInView from "@/hooks/useSectionInView";
import { AnimationProps, motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

const animationSteps = {
  initial: "hidden",
  animate: "shown",
};

const fadeInProps: AnimationProps = {
  variants: {
    hidden: {
      y: 100,
      opacity: 0,
    },
    shown: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        stiffness: 0,
      },
    }),
  },
  ...animationSteps,
};

const zoomProps: AnimationProps = {
  ...animationSteps,
  variants: {
    hidden: {
      scale: 0.25,
      opacity: 0,
    },
    shown: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6 + custom * 0.5,
        stiffness: 0,
      },
    }),
  },
};

const Hero = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-end mx-auto max-w-screen-xl gap-6 min-h-[calc(100vh-6rem)] pt-4 md:pt-0 pb-10 px-4 sm:px-6 2xl:px-0 scroll-m-[100vh]"
    >
      <motion.div className="w-full md:w-7/12 lg:w-2/3">
        <div className="mb-7">
          <motion.h2
            {...fadeInProps}
            custom={0}
            className="font-semibold text-lg mb-4"
          >
            Hi, I&apos;m Alfonsus Avianto 👋
          </motion.h2>
          <motion.h1
            {...fadeInProps}
            custom={1}
            className="font-bold text-5xl mb-5"
          >
            Frontend Engineer
          </motion.h1>
          <motion.p custom={2} {...fadeInProps} className="text-lg">
            A computer science graduate from the University of Brawijaya.
            I&apos;m a frontend engineer with a passion for crafting intuitive
            and engaging user experiences. With expertise in React, Vue,
            Next.js, and TypeScript, I thrive in developing performant and
            scalable web applications.
          </motion.p>
        </div>
        <div className="flex gap-4">
          <Button
            rightIcon={<AiOutlineMail className="text-xl" />}
            href={EMAIL_LINK}
            {...zoomProps}
            custom={0}
          >
            Contact Me
          </Button>
          <Button
            variant="secondary"
            rightIcon={<BsArrowUpRight className="text-lg" />}
            href="#portfolio"
            custom={1}
            {...zoomProps}
          >
            My Portfolio
          </Button>
        </div>
      </motion.div>
      <motion.div
        custom={2}
        {...zoomProps}
        className="w-full md:w-5/12 lg:w-1/3"
      >
        <Image
          src={MyPhoto}
          alt="Alfonsus Avianto"
          width={1200}
          height={1600}
          className="w-full lg:max-w-[400px] h-full aspect-[16/10] object-cover object-center md:aspect-[3/4] md:ml-auto rounded"
          placeholder="blur"
          priority
        />
      </motion.div>
    </section>
  );
};
export default Hero;
