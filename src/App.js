import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navmenu from './components/Navmenu';
import Home from './components/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SmoothScrollbar from './components/Smoothscroll';

export default function App() {
  return (
    <>
      <Router>
        <Navmenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/achievements">
              <Achievements />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}
