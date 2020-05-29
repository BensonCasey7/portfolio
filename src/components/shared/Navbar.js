import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import NavbarLink from './NavbarLink';

function Navbar(props) {
  const { showNavbarName } = props;
  const showName = showNavbarName ? '' : 'navbar__title--hidden';

  return (
    <div className={'navbar'}>
      <div className={'grid-x navbar__container'}>
        <div className={'cell medium-4'}>
          <Link to='./' className={'navbar__logo-wrapper'}>
            <div className={'navbar__logo'}>
              <Logo/>
            </div>
          </Link>
        </div>
        <div className={`cell medium-4 navbar__title ${showName}`}>
          CASEY BENSON
        </div>
        <div className={'cell medium-4 navbar__link-group'}>
          <NavbarLink path={'resume'} text={'Interactive Resume'}/>
          <NavbarLink path={'contact'} text={'Contact Me'}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
