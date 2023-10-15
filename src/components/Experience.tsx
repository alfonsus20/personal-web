import cn from "@/utils/classnames";
import Image, { StaticImageData } from "next/image";

interface ExperienceProps {
  image: StaticImageData;
  className?: string;
}

const Experience = ({ image, className }: ExperienceProps) => {
  return (
    <div
      className={cn(
        "flex gap-5 px-4 py-3 shadow-lg rounded-lg max-w-[26rem] items-center",
        className
      )}
    >
      <div className="w-28 h-28 flex items-center justify-center">
        <Image
          src={image}
          width={200}
          height={200}
          alt="tiket"
          placeholder="blur"
          objectFit="contain"
        />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Frontend Engineer Intern</h3>
        <div className="text-sm space-y-0.5">
          <div>
            <span className="w-8 inline-block">💼</span>
            <span>Tiket.com</span>
          </div>
          <div>
            <span className="w-8 pl-1 inline-block">📍</span>
            <span>Jakarta</span>
          </div>
          <div>
            <span className="w-8 text- inline-block">📅</span>
            <span>December 2021 - July 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
