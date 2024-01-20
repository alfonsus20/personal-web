"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToHash = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const element = document.getElementById(hash.slice(1));

    element?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToHash;
