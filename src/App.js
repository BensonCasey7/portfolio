import React, { useState } from 'react';
import './stylesheets/app.scss';
import Navbar from './components/shared/Navbar'
import Main from './components/shared/Main'

function App() {
  const [showNavbarName, updateShowNavbarName] = useState(false);

  return (
    <div>
      <Navbar showNavbarName={showNavbarName}/>
      <Main updateShowNavbarName={updateShowNavbarName}/>
    </div>
  );
}

export default App;
