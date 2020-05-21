import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import InteractiveResume from '../../pages/InteractiveResume'

function Main(props) {
  let { updateShowNavbarName } = props;

  return (
    <div className={'page'}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/resume'>
          <InteractiveResume updateShowNavbarName={updateShowNavbarName}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
