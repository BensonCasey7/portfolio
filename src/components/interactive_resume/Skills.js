import React from 'react';
import ProgressBar from '../shared/ProgressBar';

function Skills() {

  return (
    <div>
      <div className={'flex'}>
        <div>Ruby</div>
        <ProgressBar progress={90}/>
      </div>
      <div className={'flex'}>
        <div>Rails</div>
        <ProgressBar progress={90}/>
      </div>
      <div className={'flex'}>
        <div>React</div>
        <ProgressBar progress={50}/>
      </div>
    </div>
  );
}

export default Skills;
