import React, { useEffect, useState } from "react";

export default function ScrollUpButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`scroll-up-btn${show ? " show" : ""}`} onClick={scrollToTop}>
      <i className="fas fa-angle-up"></i>
    </div>
  );
}
