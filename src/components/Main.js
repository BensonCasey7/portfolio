import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Design from './pages/Design'
import Contact from './pages/Contact'
import '../App.css';
import './components.css';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/design' component={Design}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
