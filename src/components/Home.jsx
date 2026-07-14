import React from "react";
import useTypewriter from "../hooks/useTypewriter";

export default function Home() {
  const role = useTypewriter(["Freelancer", "Student", "Developer"], {
    typeSpeed: 100,
    backSpeed: 60,
  });

  return (
    <section className="home" id="home">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/vid/vid1.mp4" type="video/mp4" />
      </video>

      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Venkat Mothukuri</div>
          <div className="text-3">
            And I'm a <span className="typing-1">{role}</span>
          </div>
          <a href="#contact">Hire me</a>
        </div>
      </div>
    </section>
  );
}
