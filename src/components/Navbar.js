import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { showNavbarName } = props;
  const nameClass = showNavbarName ? '' : 'navbar__title--hidden';

  return (
    <div className={'navbar'}>
      <div className={'grid-x navbar__container'}>
        <Link to='./' className={'cell medium-4 navbar__link'}>
          LOGO
        </Link>
        <div className={`cell medium-4 navbar__title ${nameClass}`}>
          CASEY BENSON
        </div>
        <div className={'cell medium-4 navbar__link-group'}>
          <Link to='./resume' className={'navbar__link'}>
            Interactive Resume
          </Link>
          <Link to='./' className={'navbar__link'}>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
