import React from 'react';
import PageHeader from '../../component/pageHeader/pageHeader';
import { BsInfoCircle } from 'react-icons/bs';
import Helper from '../../helper/progress';
import '../skills/skills.scss';

const skillsData = {
  frontend: [
    { name: 'HTML', level: 100 }, 
    { name: 'CSS', level: 70 },
    { name: 'JAVASCRIPT', level: 70 },
    { name: 'REACT JS', level: 80 },
    { name: 'REACT NATIVE', level: 70 },
    { name: 'FLUTTER', level: 50 },
  ],
  backend: [
    { name: 'JAVA', level: 40 },
    { name: 'SPRINGBOOT', level: 60 },
  ],
  database: [
    { name: 'MONGODB', level: 90 },
  ],
};

const Skills = () => {
  
  return (
    
    <section id="skills">
      <PageHeader
        headerText="My Skills"
        icon={<BsInfoCircle size={40} />}
      />
      <div className="container__skills">

        <div className="section__div">
          <h2 className="cat">FRONT END</h2>
          {skillsData.frontend.map((skill, index) => (
            <Helper key={index} skill={skill} />
          ))}
        </div>

        {/* Backend Skills */}
        <div className="section__div">
          <h2 className="cat">BACK END</h2>
          {skillsData.backend.map((skill, index) => (
            <Helper key={index} skill={skill} />
          ))}
        </div>

        {/* Database Skills */}
        <div className="section__div">
          <h2 className="cat">DATABASE</h2>
          {skillsData.database.map((skill, index) => (
            <Helper key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Skills;