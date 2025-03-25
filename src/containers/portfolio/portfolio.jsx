import React from "react";
import PageHeader from "../../component/pageHeader/pageHeader";
import { BsInfoCircle } from "react-icons/bs";
import { FaReact, FaSass, FaFire, FaBolt, FaShoppingCart } from "react-icons/fa";
import "./portfolio.scss";

const projects = [
  {
    id: 1,
    title: "FoodRestaurant",
    link: "https://foodiekitchen.netlify.app/",
    embedUrl: "https://foodiekitchen.netlify.app/",
    description: "A modern food delivery platform providing users an easy way to reach out for inquiries, support, or business communication.",
    stack: [
      { name: "React", icon: <FaReact className="tech-icon" /> },
      { name: "SCSS", icon: <FaSass className="tech-icon" /> },
      { name: "Framer Motion", icon: <FaBolt className="tech-icon" /> },
      { name: "Firebase Authentication", icon: <FaFire className="tech-icon" /> },
    ],
  },
  {
    id: 2,
    title: "Cypher E-commerce",
    link: "https://cypher-ecomerce.netlify.app",
    embedUrl: "https://cypher-ecomerce.netlify.app",
    description: "An e-commerce platform designed to enhance customer communication and support.",
    stack: [
      { name: "React", icon: <FaReact className="tech-icon" /> },
      { name: "Framer Motion", icon: <FaBolt className="tech-icon" /> },
      { name: "SCSS", icon: <FaSass className="tech-icon" /> },
      { name: "React Context API", icon: <FaShoppingCart className="tech-icon" /> },
    ],
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    link: "https://tic-tac-toe-cypher.netlify.app/",
    embedUrl: "https://tic-tac-toe-cypher.netlify.app/",
    description: "A fun, strategic Tic-Tac-Toe game featuring AI-based learning.",
    stack: [
      { name: "React", icon: <FaReact className="tech-icon" /> },
      { name: "SCSS", icon: <FaSass className="tech-icon" /> },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeader headerText="My Portfolio" icon={<BsInfoCircle size={40} />} />

      <div className="portfolio-content">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <div className="iframe-container">
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="project-iframe"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                scrolling="no"
              />
              <div className="iframe-overlay"></div>
            </div>

            <div className="info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.stack.map((tech, index) => (
                  <span key={index} className="tech">
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                Open Full Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;