import React, { useState, useEffect } from 'react';

function ProgressBar(props) {
  const { progress } = props;
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({width: `${progress}%`});
  }, [progress]);

  return (
    <div className={'progress-bar'}>
      <div className={'progress-bar__progress'} style={style}></div>
    </div>
  );
}

export default ProgressBar;
