import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarLink(props) {
  const { path, text } = props;
  const currentLocation = useLocation();

  function activeLink() {
    return `/${path}` === currentLocation.pathname ? 'navbar__link--active' : '';
  }

  return (
    <Link to={`./${path}`} className={`navbar__link ${activeLink()}`}>
      {text}
    </Link>
  );
}

export default NavbarLink;
