"use client";
import React, { useState } from "react";
import { ProjectData } from "@/types/data";
import { FaDesktop, FaMobile } from "react-icons/fa";
import Image from "next/image";

type Props = ProjectData;

function ProjectCard(props: Props) {
  const { name, description, screenshots } = props;

  const [interfaceType, setInterfaceType] = useState<"desktop" | "mobile">(
    screenshots[0]?.interfaceType || "desktop",
  );

  const mobileAndDesktopAvailable = screenshots.length === 2;

  const displayedScreenshots = screenshots.find(
    (shot) => shot.interfaceType === interfaceType,
  );

  const renderScreenshots = () => {
    if (!displayedScreenshots) return null;

    if (interfaceType === "mobile") {
      return (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedScreenshots.images.map((image, idx) => (
            <Image
              key={idx}
              src={image}
              width={640}
              height={360}
              className="col-span-1 object-top object-cover"
              placeholder="blur"
              alt="screenshot"
            />
          ))}
        </div>
      );
    }

    return (
      <div className="grid gap-8 sm:grid-cols-2">
        {displayedScreenshots.images.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            width={1280}
            height={1080}
            className="col-span-1 object-top object-cover"
            placeholder="blur"
            alt="screenshot"
          />
        ))}
      </div>
    );
  };

  return (
    <li className="text-xl font-semibold">
      <h3 className="mb-3">{name}</h3>

      {/* Interface Type Toggle */}
      {mobileAndDesktopAvailable && (
        <div className="flex justify-center">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setInterfaceType("desktop")}
              className={`p-2 rounded ${
                interfaceType === "desktop"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200"
              }`}
            >
              <FaDesktop />
            </button>
            <button
              onClick={() => setInterfaceType("mobile")}
              className={`p-2 rounded ${
                interfaceType === "mobile"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200"
              }`}
            >
              <FaMobile />
            </button>
          </div>
        </div>
      )}

      {/* Screenshots */}
      {renderScreenshots()}

      {/* Description */}
      {description && (
        <div className="text-base font-normal mt-4">{description}</div>
      )}
    </li>
  );
}

export default ProjectCard;
