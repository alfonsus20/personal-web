import Button from "@/components/Button";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="pb-20 px-6 2xl:px-0">
      <div className="flex items-center max-w-4xl mx-auto gap-4 rounded-lg px-8 py-8 shadow-lg">
        <div className="w-1/2">
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Collaboration?
            </h2>
            <p>
              Wanna a further discuss and more information about my competency?
              You can reach me out via email and also see my resume
            </p>
          </div>
        </div>
        <div className="w-1/2 flex gap-2 items-center justify-end">
          <Button rightIcon={<AiOutlineMail />}>Email Me</Button>
          <Button rightIcon={<AiOutlineFileText />} variant="secondary">
            View My Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
