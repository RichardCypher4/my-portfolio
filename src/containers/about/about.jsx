import React from 'react';
import PageHeader from '../../component/pageHeader/pageHeader';
import { BsInfoCircle } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import '../about/about.scss';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

const personalDetails = [
  {
    label: 'Name',
    value: 'Richard Cypher',
  },
  {
    label: 'Age',
    value: '22',
  },
  {
    label: 'Address',
    value: 'Nigeria',
  },
  {
    label: 'Email',
    value: 'Oladayorichard1@gmail.com',
  },
  {
    label: 'Contact No',
    value: '09037589818',
  },
];

const JobSummary = `I am a resilient developer who turns challenges into opportunities. 
My passion for coding fuels my constant growth and innovation. 
I am not just a problem solver; I am a creator of impactful solutions. 
My skills are a testament to my hard work and dedication. 
Lastly, I am proof that perseverance and passion lead to success.`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader 
        headerText="About Me" 
        icon={<BsInfoCircle size={40} />} 
      />
      <div className="about__content">
        <div className='about_content_personalWrapper'>
          <Animate
            play
            duration={1.5}
            start={{
              transform: 'translateX(-900px)',  
            }}
            end={{
              transform: 'translateX(0px)',  
            }}
          >
            <h3>Full Stack Engineer</h3>
            <p>{JobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            start={{
              transform: 'translateX(500px)', 
            }}
            end={{
              transform: 'translateX(0px)', 
            }}
          >
            <h3 className='personalInformationHeadertext'>Personal Details</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about_content_servicesWrapper'>
          <Animate
            play
            duration={1.5}
            start={{
              transform: 'translateX(600px)', 
            }}
            end={{
              transform: 'translateX(0px)', 
            }}
          >
            <div className='about_contentservicesWrapper_innerContent'>
              <div>
                <FaDev size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <DiAndroid size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <DiApple size={60} color='var(--yellow-theme-main-color)' /> 
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;