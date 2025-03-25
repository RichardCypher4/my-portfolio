import React, { useEffect } from 'react';
import './home.scss';
import { Animate } from 'react-simple-animate';
import Mine from '../../asset/niii/mine.jpg';
import MyResume from '../../asset/niii/Oladayorichard.pdf';

const Home = () => {
  // Debug to check for duplicate mounts
  useEffect(() => {
    console.log('Home component mounted');
    return () => console.log('Home component unmounted');
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = MyResume;
    link.download = 'OladayoRichard_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home">
      <div className="home__content">
        <div className="home__image-wrapper">
          <img src={Mine} alt="Cypher" className="home__image" />
        </div>
        
        <div className="home__text-wrapper">
          <h1>
            Hi, I'm Cypher<br />
            Full Stack Engineer
          </h1>
        </div>

        <Animate
          play
          duration={1.5}
          start={{ transform: 'translateY(400px)' }}
          end={{ transform: 'translateY(0px)' }}
        >
          <div className="home__contact-me">
            <button onClick={handleDownload}>Download Resume</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default React.memo(Home);