import Button from "@/components/Button";
import { EMAIL_LINK, RESUME_LINK } from "@/data/links";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="pb-20 px-6 2xl:px-0">
      <div className="flex flex-col sm:flex-row items-center max-w-4xl mx-auto gap-6 sm:gap-4 rounded-lg px-8 py-8 shadow-lg">
        <div className="w-full sm:w-1/2">
          <div className="sm:max-w-sm">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Collaboration?
            </h2>
            <p>
              Wanna a further discuss and more information about my competency?
              You can reach me out via email and also see my resume
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex gap-2 items-center sm:justify-end flex-wrap">
          <Button
            rightIcon={<AiOutlineMail className="text-lg" />}
            className="flex-auto sm:max-w-[200px]"
            href={EMAIL_LINK}
          >
            Email Me
          </Button>
          <Button
            rightIcon={<AiOutlineFileText className="text-lg" />}
            className="flex-auto sm:max-w-[200px] gap-1.5"
            variant="secondary"
            href={RESUME_LINK}
            target="_blank"
          >
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
