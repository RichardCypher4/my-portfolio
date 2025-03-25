import React from 'react';
import PageHeader from '../../component/pageHeader/pageHeader';
import { BsInfoCircle } from 'react-icons/bs';
import { FaReact, FaSass, FaFire, FaBolt, FaShoppingCart } from 'react-icons/fa';
import './portfolio.scss';

const projects = [
  {
    id: 1,
    title: 'FoodRestaurant',
    link: 'https://foodiekitchen.netlify.app/',
    description: 'This  is  a designed for a food delivery app, providing users with an easy way to reach out for inquiries, support, or business communication.',
    stack: [
      { name: 'React', icon: <FaReact className="tech-icon" /> },
      { name: 'SCSS', icon: <FaSass className="tech-icon" /> },
      { name: 'Framer Motion', icon: <FaBolt className="tech-icon" /> },
      { name: 'Firebase Authentication', icon: <FaFire className="tech-icon" /> },
    ],
  },
  {
    id: 2,
    title: 'Cypher E-commerce',
    link: 'http://cypher-ecomerce.netlify.app',
    description: 'The e-commerce website is designed to enhance customer communication and support. It provides users with multiple ways to reach out for inquiries, orders, or assistance.',
    stack: [
      { name: 'React', icon: <FaReact className="tech-icon" /> },
      { name: 'Framer Motion', icon: <FaBolt className="tech-icon" /> },
      { name: 'SCSS', icon: <FaSass className="tech-icon" /> },
      { name: 'React Context API', icon: <FaShoppingCart className="tech-icon" /> },
      { name: 'Firebase Authentication', icon: <FaFire className="tech-icon" /> },
    ],
    },
    {

      id: 3,
      title: 'Tic-Tac-Toe',
      link: 'https://tic-tac-toe-cypher.netlify.app/',
      description: ' This Tic-Tac-Toe game is designed for fun, strategy, and AI-based learning, making it engaging for players of all ages.',
      stack: [
        { name: 'React', icon: <FaReact className="tech-icon" /> },
       
        { name: 'SCSS', icon: <FaSass className="tech-icon" /> },
       
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
            {/* Project Preview (Image link) */}
            <div className="image-container">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <iframe
                  src={project.link}
                  className="project-preview"
                  title={project.title}
                  loading="lazy"
                ></iframe>
              </a>
            </div>

            {/* Project Info with Black Background */}
            <div className="project-info">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;