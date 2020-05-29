import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo_white.svg';

function Navbar(props) {
  const { showNavbarName } = props;
  const nameClass = showNavbarName ? '' : 'navbar__title--hidden';
  const currentLocation = useLocation();

  function activeLink(path) {
    return path === currentLocation.pathname ? 'navbar__link--active' : '';
  }

  return (
    <div className={'navbar'}>
      <div className={'grid-x navbar__container'}>
        <div className={'cell medium-4'}>
          <Link to='./' className={'navbar__logo-wrapper'}>
            <img src={logo} alt={'Logo'} title={'Logo'} className={'navbar__logo'}/>
          </Link>
        </div>
        <div className={`cell medium-4 navbar__title ${nameClass}`}>
          CASEY BENSON
        </div>
        <div className={'cell medium-4 navbar__link-group'}>
          <Link to='./resume' className={`navbar__link ${activeLink('/resume')}`}>
            Interactive Resume
          </Link>
          <Link to='./contact' className={`navbar__link ${activeLink('/contact')}`}>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
