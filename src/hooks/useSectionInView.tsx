"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { SectionName } from "@/types/section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useSectionInView(
  sectionName: SectionName,
  threshold = 0.25
) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName]);

  useEffect(() => {
    return () => {
      setActiveSection("");
    };
  }, []);

  return {
    ref,
  };
}
