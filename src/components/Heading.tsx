import cn from "@/utils/classnames";

type HeadingProps = {
  title: string;
  subtitle: string;
  position?: "left" | "center" | "right";
  id?: string;
};

const Heading = ({
  title,
  subtitle,
  position = "center",
  id,
}: HeadingProps) => {
  return (
    <div
      className={cn("mb-10 px-4 sm:px-6 2xl:px-0", {
        "text-center": position === "center",
        "text-left": position === "left",
        "text-right": position === "right",
      })}
      id={id}
    >
      <h4 className="uppercase mb-4 text-lg font-light tracking-[0.4rem] text-gray-500">
        {title}
      </h4>
      <h1 className="font-bold text-5xl">{subtitle}</h1>
    </div>
  );
};

export default Heading;
