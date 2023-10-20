import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-center pt-8 pb-8 border-t-2 border-gray-700">
      <div className="flex text-2xl gap-4 mb-4">
        <div className="border-gray-600 rounded-full">
          <FaLinkedin />
        </div>
        <div className="border-gray-600 rounded-full">
          <FaGithub />
        </div>
      </div>
      <p className="font-medium text-sm">Developed by <span className="font-bold">Alfonsus Avianto Chandrawan</span>, using Next.js and Tailwind CSS.</p>
    </div>
  );
};

export default Footer;
