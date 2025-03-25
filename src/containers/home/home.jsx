import React from 'react';
import '../home/home.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import Mine from '../../asset/niii/mine.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <div className="home__image-wrapper">
          <img src={Mine} alt="Cypher" className="home__image" />
        </div>
        <h1>
          Hi, I'm Cypher
          <br />
          Full Stack Engineer
        </h1>
      </div>
      <Animate play duration={1.5} start={{ transform: 'translateY(400px)' }} end={{ transform: 'translateY(0px)' }}>
        <div className="home__contact-me">
          <button onClick={() => navigate('/contact')}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;