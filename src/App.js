import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
        <Switch>
          <Route component={About} path='/' exact />
          <Route component={Projects} path='/projects' />
          <Route component={Contact} path='/contact' />
        </Switch>
    </>
  );
}

export default App;
