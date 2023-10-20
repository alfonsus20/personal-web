import { StaticImageData } from "next/image";
import { FcBriefcase, FcCalendar } from "react-icons/fc";

interface ExperienceProps {
  image: StaticImageData;
  className?: string;
}

const Experience = ({ image, className }: ExperienceProps) => {
  return (
    <div className="flex">
      <div className="flex w-32 flex-shrink-0">
        <div className="flex justify-center flex-col items-center flex-shrink-0">
          <div className="w-8 h-8 flex-shrink-0 rounded-full bg-white border-2 border-gray-900"></div>
          <div className="w-0.5 h-full bg-gray-800"></div>
        </div>
      </div>
      <div className="flex-auto pb-12">
        <h3 className="font-bold mb-2 text-lg">Frontend Engineer Intern</h3>
        <div className="text-sm space-y-0.5 mb-2 font-medium text-gray-700">
          <div className="flex items-center">
            <span className="w-7 inline-block">
              <FcBriefcase className='text-xl' />
            </span>
            <span>
              <span className="underline">Tiket.com</span> • Jakarta
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-7 inline-block">
              <FcCalendar className='text-xl' />
            </span>
            <span>Dec 2021 - Jul 2022</span>
          </div>
        </div>
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          ratione laboriosam? Omnis minus quo ratione molestiae ea ut vel id,
          doloremque sint maxime facilis sit optio, suscipit fugit! Autem, enim!
          ratione laboriosam? Omnis minus quo ratione molestiae ea ut vel id,
          doloremque sint maxime facilis sit optio, suscipit fugit! Autem, enim!
        </p>
      </div>
    </div>
  );
};
export default Experience;
