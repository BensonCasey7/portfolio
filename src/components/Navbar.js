import React from "react";

function Navbar() {
  return (
    <div className={'navbar'}>
      <div className={'grid-x navbar__container'}>
        <div className={'cell medium-4 navbar__link'}>
          LOGO
        </div>
        <div className={'cell medium-4 navbar__title'}>
          CASEY BENSON
        </div>
        <div className={'cell medium-4 navbar__link-group'}>
          <div className={'navbar__link'}>
            Interactive Resume
          </div>
          <div className={'navbar__link'}>
            Contact Me
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
