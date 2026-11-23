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
    img: "/images/pg.png",
    title: "PG Rent Management",
    tech: "Docker, CI/CD, React, MySQL, AWS",
    points: [
      "Deployed the application on AWS using Docker and Amazon RDS for database management.",
      "Implemented JWT authentication, bcrypt security, role-based access (RBAC), and responsive UI.",
    ],
    link: "https://pg.mothukuri-venkat.online/",
  },
  {
    img: "/images/ecom.png",
    title: "E-Commerce Web Application",
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

  // Reset index if screen size changes
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Navigate to a specific slide
  const goTo = (i) => {
    setIndex(Math.min(Math.max(i, 0), maxIndex));
  };

  // Next button
  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Previous button
  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>

        <div className="carousel">

          {/* Previous Button */}
          <button
            className="carousel-btn prev-btn"
            onClick={prevSlide}
            disabled={index === 0}
            aria-label="Previous projects"
          >
            &#10094;
          </button>

          {/* Carousel */}
          <div className="carousel-track-wrapper">
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
                  style={{
                    width: `${100 / itemsPerView}%`,
                    flex: `0 0 ${100 / itemsPerView}%`,
                  }}
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

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            className="carousel-btn next-btn"
            onClick={nextSlide}
            disabled={index === maxIndex}
            aria-label="Next projects"
          >
            &#10095;
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="owl-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`owl-dot${i === index ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
