import GarenaLogo from "@/assets/images/work/garena.png";
import KalbeLogo from "@/assets/images/work/kalbe.png";
import LingotalkLogo from "@/assets/images/work/lingotalk.webp";
import TiketLogo from "@/assets/images/work/tiket.webp";
import ExperienceCard from "@/components/Experience";
import Heading from "@/components/Heading";
import cn from "@/utils/classnames";

const experienceList = [TiketLogo, GarenaLogo, KalbeLogo, LingotalkLogo];

const Experience = () => {
  return (
    <section className="mx-auto max-w-[52rem] py-24">
      <Heading title="Experience" subtitle="Glympse of My Career" />
      <div className="mx-auto my-16 max-w-4xl relative">
        <div className="space-y-4">
          {experienceList.map((exp, idx) => (
            <ExperienceCard
              image={exp}
              key={idx}
              className={cn({ "ml-auto": idx % 2 !== 0 })}
            />
          ))}
        </div>
        <div
          className="w-1 h-full bg-gray-800 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 
                    flex flex-col items-center justify-around 
                    after:w-1 after:h-8 after:absolute after:top-full after:bg-gray-900
                    before:w-1 before:h-8 before:absolute before:bottom-full before:bg-gray-900"
        >
          <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-900"></div>
          <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-900"></div>
          <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-900"></div>
          <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-900"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
