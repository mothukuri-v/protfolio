import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const VALID_SECTIONS = [
  "home",
  "about",
  "services",
  "skills",
  "projects",
  "contact",
];

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.replace("/", "") || "home";
    const id = VALID_SECTIONS.includes(section) ? section : "home";

    const el = document.getElementById(id);
    if (el) {
      // small timeout lets the page finish laying out (e.g. on first load)
      const t = setTimeout(() => {
        window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      }, 50);
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  return null;
}
