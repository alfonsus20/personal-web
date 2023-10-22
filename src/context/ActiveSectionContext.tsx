"use client";

import { SectionName } from "@/types/section";
import React, { useState, createContext, useContext } from "react";

interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
}

interface IActiveSectionContext {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}
export const ActiveSectionContext = createContext<IActiveSectionContext | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error("Context not available");
  }

  return context;
}
