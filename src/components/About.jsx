import React from "react";
import useTypewriter from "../hooks/useTypewriter";

export default function About() {
  const role = useTypewriter(
    ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"],
    { typeSpeed: 100, backSpeed: 60 }
  );

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="/images/picture.jpg" alt="Venkat Mothukuri" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Venkat Mothukuri <span className="typing-2">{role}</span>
            </div>
            <br />
            <p>
              I recently completed my graduation in Computer Science &amp;
              Information Technology from Acharya Nagarjuna University. With a
              diploma in Electrical &amp; Electronics Engineering,
              demonstrating adaptability and a commitment to continuous
              learning.
            </p>
            <br />
            <p>
              💻 Tech Enthusiast &amp; Aspiring Full Stack Developer || Proficient
              in Java, Python, HTML, CSS, JavaScript, MySQL, with strong
              skills in React.js &amp; Hibernate. Open to Internships &amp;
              Full-Time Roles.
            </p>
            <br />
            <p>
              🚀 Passionate about problem-solving, clean code, and teamwork, I
              aim to build impactful software solutions that bridge
              innovation with real-world needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
