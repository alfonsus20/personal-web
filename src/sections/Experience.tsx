import GarenaLogo from "@/assets/images/work/garena.png";
import KalbeLogo from "@/assets/images/work/kalbe.png";
import LingotalkLogo from "@/assets/images/work/lingotalk.webp";
import TiketLogo from "@/assets/images/work/tiket.webp";
import ExperienceCard from "@/components/Experience";

const experienceList = [TiketLogo, GarenaLogo, KalbeLogo, LingotalkLogo];

const Experience = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-24">
      <div className="mb-10 text-center">
        <h4 className="uppercase mb-4 text-lg font-light tracking-[0.4rem] text-gray-500">
          Experience
        </h4>
        <h1 className="font-bold text-5xl">Over 3 years of experience</h1>
      </div>
      <div className="mx-auto max-w-4xl space-y-4">
        {experienceList.map((exp, idx) => (
          <ExperienceCard
            image={exp}
            key={idx}
            className={idx % 2 !== 0 ? "ml-auto" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
