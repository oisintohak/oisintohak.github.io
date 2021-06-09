import React from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });
    return unlisten;
  }, [history, isFirstMount]);

  return (
    <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            path='/'
            exact
            component={(props) => (
              <About isFirstMount={isFirstMount} {...props} />
            )}
          />
          <Route component={Projects} path='/projects' />
          <Route component={Contact} path='/contact' />
        </Switch>
        <Footer />
    </AnimatePresence>
  );
}

export default App;
