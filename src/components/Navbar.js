import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import home from '../icons/home.png';
import homeHover from '../icons/home-hover.png';
import html5 from '../icons/html5.png';
import html5Hover from '../icons/html5-hover.png';
import brackets from '../icons/brackets.png';
import bracketsHover from '../icons/brackets-hover.png';
import design from '../icons/design.png';
import designHover from '../icons/design-hover.png';
import contact from '../icons/contact.png';
import contactHover from '../icons/contact-hover.png';
import github from '../icons/github.png';
import '../App.css';
import './components.css';

const Navbar = () => {
  return (
    <div>
      <div className='custom-nav'>
        <div>
          <Link to='./'>
            <img src={logo} height='60' alt='logo'/>
          </Link>
        </div>
        <div className='icon-group'>
          <div>
            <Link to='./'>
              <div className='hover-group'>
                <img src={home} width='35' alt='home' className='icon-base'/>
              </div>
              <div>
                <img src={homeHover} width='35' alt='home-hover'/>
              </div>
            </Link>
          </div>
          <div>
            <Link to='./skills'>
              <div className='hover-group'>
                <img src={html5} width='35' alt='html5' className='icon-base' />
              </div>
              <div>
                <img src={html5Hover} width='35' alt='html5-hover'/>
              </div>
            </Link>
          </div>
          <div>
            <Link to='./projects'>
              <div className='hover-group'>
                <img src={brackets} width='35' alt='brackets' className='icon-base' />
              </div>
              <div>
                <img src={bracketsHover} width='35' alt='brackets-hover'/>
              </div>
            </Link>
          </div>
          <div>
            <Link to='./design'>
              <div className='hover-group'>
                <img src={design} width='35' alt='design' className='icon-base' />
              </div>
              <div>
                <img src={designHover} width='35' alt='design-hover'/>
              </div>
            </Link>
          </div>
          <div>
          <Link to='./contact'>
              <div className='hover-group'>
                <img src={contact} width='35' alt='contact' className='icon-base' />
              </div>
              <div>
                <img src={contactHover} width='35' alt='contact-hover'/>
              </div>
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <img src={github} width='35' alt='github' className='dropdown-toggle' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'/>
          <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a className='dropdown-item' href='#'>Action</a>
            <a className='dropdown-item' href='#'>Another action</a>
            <a className='dropdown-item' href='#'>Something else here</a>
          </div>
        </div>
      </div>
      <div className="gradient"></div>
    </div>
  );
}

export default Navbar;
