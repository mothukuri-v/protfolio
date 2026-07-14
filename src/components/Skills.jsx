import React from "react";

const LANGUAGES = [
  { name: "Java", level: 90 },
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
];

const FRAMEWORKS = [
  { name: "ReactJs", level: 70 },
  { name: "Hibernate", level: 80 },
  { name: "SpringBoot", level: 50 },
];

const DATABASES = [
  { name: "MySQL", level: 85 },
  { name: "MongoDB", level: 60 },
];

function SkillBar({ name, level }) {
  return (
    <div className="bars">
      <div className="info">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="line">
        <div className="line-fill" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">
              My Experience <i className="fas fa-user-tie"></i>
            </div>
            <div className="experience">
              <ul>
                <li>
                  Full Stack Developer INTERN (Jan 24 - Jun 24)
                  <ul>
                    <li>&#8594; Trained in Full Stack development.</li>
                    <li>
                      &#8594; Maintained accurate records of all activities
                      performed throughout the internship period.
                    </li>
                    <li>
                      &#8594; Lead Full Stack development projects, ensuring
                      user-centric design and functionality.
                    </li>
                    <li>
                      &#8594; Managed comprehensive documentation of full
                      stack development processes.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <br />
            <div className="text">
              My Education <i className="fas fa-user-graduate"></i>
            </div>
            <div className="education">
              <ul>
                <li>
                  B.E. (Computer Science &amp; Information Technology)
                  <p>CGPA - 7.07</p>
                  <span>
                    Chalapathi Institute of Engineering &amp; Technology
                    (2022-2025)
                  </span>
                </li>
                <li>
                  Diploma (Electrical &amp; Electronics)
                  <p>Percentage - 75%</p>
                  <span>
                    Pace Institute of Technology &amp; Sciences (2021)
                  </span>
                </li>
              </ul>
            </div>
            <a href="#projects">Read more</a>
          </div>

          <div className="column right">
            <h1>Languages</h1>
            {LANGUAGES.map((l) => (
              <SkillBar key={l.name} {...l} />
            ))}

            <h1>Frameworks</h1>
            {FRAMEWORKS.map((f) => (
              <SkillBar key={f.name} {...f} />
            ))}

            <h1>Databases</h1>
            {DATABASES.map((d) => (
              <SkillBar key={d.name} {...d} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
