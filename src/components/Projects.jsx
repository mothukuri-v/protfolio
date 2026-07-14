import React, { useEffect, useState } from "react";

const PROJECTS = [
  {
    img: "/images/car.png",
    title: "CarRentalApp",
    tech: "Python, HTML, CSS, Django",
    points: [
      "Web application for car booking and tracking system.",
      "Built using Django framework.",
    ],
    link: "https://github.com/Venkat063/Car-Rental-App",
  },
  {
    img: "/images/ecom.png",
    title: "E-Commerce Web Application (Flipkart Clone Lite)",
    tech: "Java, Spring Boot, React, MySQL, AWS",
    points: [
      "Full-stack platform with product catalog, cart & order management.",
      "Developed REST APIs with JWT authentication.",
    ],
    link: "https://github.com/Venkat063/e-ecommerceApp",
  },
  {
    img: "/images/portfolio.png",
    title: "My Portfolio",
    tech: "HTML, CSS, JavaScript, Google Apps Script",
    points: [
      "Responsive design, animations, and smooth scrolling.",
      "Google Apps Script handles form submissions & redirects.",
    ],
    link: "https://venkat063.github.io/portfilio/",
  },
  {
    img: "/images/image-.png",
    title: "Online Banking System",
    tech: "Java, Spring Boot, React, PostgreSQL",
    points: [
      "Features: account creation, fund transfers, transaction history.",
      "Secured with Spring Security + JWT & role-based access control.",
    ],
    link: "https://github.com/Venkat063/banking-system",
  },
  {
    img: "/images/image-.png",
    title: "Learning Management System (LMS)",
    tech: "Java, Spring Boot, React, MySQL",
    points: [
      "Student enrollment, dashboards, and authentication.",
      "Integrated course APIs with React, supporting file upload/download.",
    ],
    link: "https://github.com/Venkat063/ims-platform",
  },
];

function useItemsPerView() {
  const getItems = () => {
    if (window.innerWidth >= 1000) return 3;
    if (window.innerWidth >= 600) return 2;
    return 1;
  };
  const [items, setItems] = useState(getItems);

  useEffect(() => {
    const onResize = () => setItems(getItems());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return items;
}

export default function Projects() {
  const itemsPerView = useItemsPerView();
  const maxIndex = Math.max(0, PROJECTS.length - itemsPerView);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(id);
  }, [maxIndex]);

  const goTo = (i) => setIndex(Math.min(Math.max(i, 0), maxIndex));

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>

        <div className="carousel">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${(index * 100) / itemsPerView}%)`,
            }}
          >
            {PROJECTS.map((p) => (
              <div
                className="card"
                key={p.title}
                style={{ width: `calc(${100 / itemsPerView}% - 20px)` }}
              >
                <div className="box">
                  <img src={p.img} alt={p.title} />
                  <div className="text">{p.title}</div>
                  <ul>
                    <li>○ Technologies: {p.tech}</li>
                    {p.points.map((pt) => (
                      <li key={pt}>○ {pt}</li>
                    ))}
                  </ul>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-link"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="owl-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`owl-dot${i === index ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
