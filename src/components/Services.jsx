import React from "react";

const SERVICES = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    desc: "Solution-driven Web Developer eager to contribute to highly collaborative environments and deliver innovative solutions. Experienced in developing consumer-focused websites using HTML, CSS, PHP, and JavaScript, with a strong understanding of web design best practices, user experience, and performance optimization.",
  },
  {
    icon: "fas fa-code",
    title: "Dynamic Web Development",
    desc: "Specialized in creating interactive and dynamic websites using modern technologies like JavaScript frameworks, React.js, and server-side programming. Focused on responsive design, database integration, and delivering smooth user experiences.",
  },
  {
    icon: "fas fa-file-code",
    title: "App Development",
    desc: "Passionate Mobile Application Developer with the ability to design and deliver highly scalable and efficient applications. Skilled at building apps tailored to customer specifications, while also recommending enhancements to improve functionality, performance, and user experience. Experienced in upgrading and optimizing existing applications to increase usability and value.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Services</h2>
        <div className="services-content">
          {SERVICES.map((s) => (
            <div className="card" key={s.title}>
              <div className="box">
                <i className={s.icon}></i>
                <div className="text">{s.title}</div>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
