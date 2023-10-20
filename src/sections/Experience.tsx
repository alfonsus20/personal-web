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
    <section className="mx-auto max-w-[52rem] py-24 px-6 2xl:px-0">
      <Heading title="Experience" subtitle="Glympse of My Career Journey" />
      <div className="mx-auto my-16 max-w-4xl relative">
        <div className="">
          {experienceList.map((exp, idx) => (
            <ExperienceCard
              image={exp}
              key={idx}
              className={cn({ "ml-auto": idx % 2 !== 0 })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
