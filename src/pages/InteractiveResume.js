import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function InteractiveResume(props) {
  const { updateShowNavbarName } = props;

  function updateShowNavTitle(isVisible) {
    updateShowNavbarName(!isVisible);
  }

  return (
    <div>
      <VisibilitySensor onChange={updateShowNavTitle}>
        <h1 className={'hero__header'}>CASEY BENSON</h1>
      </VisibilitySensor>

      {[...Array(40)].map((e, i) => <div key={i}>♦</div>)}
    </div>
  );
}

export default InteractiveResume;
