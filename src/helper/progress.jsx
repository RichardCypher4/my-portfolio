import React, { useState, useEffect } from 'react';
import '../helper/progress.scss';

function Helper({ skill }) {
  const [process, setProcess] = useState(0);

  // Timer to simulate progress bar animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setProcess(skill.level);
    }, 200);

    return () => clearTimeout(timer);
  }, [skill.level]);

  return (
    <div className="skill-bar">
      <span className="skill-name">{skill.name}</span>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${process}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Helper;
