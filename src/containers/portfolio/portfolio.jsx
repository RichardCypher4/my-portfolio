import React from "react";
import PageHeader from "../../component/pageHeader/pageHeader";
import { BsInfoCircle } from "react-icons/bs";
import { FaReact, FaSass, FaFire, FaBolt } from "react-icons/fa";
import "./portfolio.scss"
import FoodRestaurantImg from "../../asset/niii/image1.jpg";
import Clone from "../../asset/niii/clone.jpg";
import TicTacToeImg from "../../asset/niii/image2.jpg";
import App from '../../asset/niii/appartment.jpg'

const projects = [

  {
    id: 1,
    title: "Appartment",
    link: "https://appartment-c.netlify.app/",
    description:
      "Built with React and Framer Motion, the sidebar tracks active routes and user authentication states. Protected routes restrict unauthorized access, and error boundaries handle loading failures gracefully. Real-time notifications appear as badges, and a floating ",
      image: App,
      stack: [
      { name: "React", icon: <FaReact className="tech-icon" /> },
      { name: "SCSS", icon: <FaSass className="tech-icon" /> },
      { name: "Framer Motion", icon: <FaBolt className="tech-icon" /> },
      { name: "Firebase Authentication", icon: <FaFire className="tech-icon" /> },
    ],
  },


  {
    id: 1,
    title: "FoodRestaurant",
    link: "https://foodiekitchen.netlify.app/",
    description:
      "A modern food delivery platform providing users an easy way to reach out for inquiries, support, or business communication.",
    image: FoodRestaurantImg, // Local screenshot file
    stack: [
      { name: "React", icon: <FaReact className="tech-icon" /> },
      { name: "SCSS", icon: <FaSass className="tech-icon" /> },
      { name: "Framer Motion", icon: <FaBolt className="tech-icon" /> },
      { name: "Firebase Authentication", icon: <FaFire className="tech-icon" /> },
    ],
  },
  {
    id: 2,
    title: "clone-dispatch",
    link: "https://clone-dispatch.netlify.app/", 
    description:
      "A React application designed to streamline the dispatch process for clone operations. It provides an interface for managing clone dispatch requests, tracking status updates, and facilitating communication between clone operators and dispatch teams.",
    image: Clone, 
    stack: [
      { name: "React", icon: <FaReact className="tech-icon" /> },
      { name: "Framer Motion", icon: <FaBolt className="tech-icon" /> },
      { name: "SCSS", icon: <FaSass className="tech-icon" /> },
      { name: "React-Router", icon: <FaReact className="tec-icon" />},
      { name: "React-Hooks", icon: <FaReact className="tec-icon" />},
    /*
      { name: "React Context API", icon: <FaShoppingCart className="tech-icon" /> },
      { name: "Firebase Authentication", icon: <FaFire className="tech-icon" /> },
       */
    ],
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    link: "https://tic-tac-toe-cypher.netlify.app/",
    description:
      "A fun, strategic Tic-Tac-Toe game featuring AI-based learning, suitable for players of all ages.",
    image: TicTacToeImg, // Local screenshot file
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
            {/* Screenshot Card */}
            <div className="screenshot-container">
              <img
                src={project.image}
                alt={project.title}
                className="screenshot"
              />
            </div>

            {/* Project Info */}
            <div className="info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Tech Stack */}
              <div className="tech-stack">
                {project.stack.map((tech, index) => (
                  <span key={index} className="tech">
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>

              {/* View Demo Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;