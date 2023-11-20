import { ExperienceData } from "@/data/experience";
import Link from "next/link";
import { FcBriefcase, FcCalendar } from "react-icons/fc";
import { MotionProps, motion } from "framer-motion";

interface ExperienceProps extends Omit<ExperienceData, "company"> {
  companyName: string;
  companyWebsite?: string;
}

const contentAnim: MotionProps = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Experience = ({
  jobTitle,
  companyName,
  companyWebsite,
  location,
  description,
  startDate,
  endDate,
}: ExperienceProps) => {
  return (
    <div className="flex">
      <div className="flex w-16 md:w-28 flex-shrink-0">
        <div className="flex justify-start flex-col items-center flex-shrink-0">
          <div className="w-8 h-8 flex-shrink-0 rounded-full bg-white border-2 border-gray-900 grid place-items-center">
            <div className="w-4 h-4 flex-shrink-0 rounded-full bg-gray-900"></div>
          </div>
          <div className="w-0.5 h-full bg-gray-800"></div>
        </div>
      </div>
      <motion.div {...contentAnim} className="flex-auto pb-12">
        <h3 className="font-bold mb-2 text-lg">{jobTitle}</h3>
        <div className="text-sm space-y-0.5 mb-2 font-medium text-gray-700">
          <div className="flex items-center">
            <span className="w-7 inline-block">
              <FcBriefcase className="text-xl" />
            </span>
            <span>
              {companyWebsite ? (
                <Link
                  href={companyWebsite}
                  target="_blank"
                  className="underline"
                >
                  {companyName}
                </Link>
              ) : (
                <span>{companyName}</span>
              )}{" "}
              • {location}
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-7 inline-block">
              <FcCalendar className="text-xl" />
            </span>
            <span>
              {startDate} - {endDate || "present"}
            </span>
          </div>
        </div>
        <div className="text-sm text-justify">{description}</div>
      </motion.div>
    </div>
  );
};
export default Experience;
