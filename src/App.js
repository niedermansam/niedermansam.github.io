import React from 'react';
import './styles/App.min.css';
import Nav from './components/Nav'
import Resume from './components/Resume'
import Projects from './components/Projects'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div className="text-container">
    <h1 id="greeting">Hi! My name is Sam.</h1>
    <div id="about-me">
      <p> I'm a web developer and data analyst. </p>
      <div className="about-bullet"> <i className="fa fa-graduation-cap fa-3x"></i> <p> I recently graduated from the University of Montana with a Master's degree in Economics. </p></div>
      <div className="about-bullet"><i className="fa fa-code fa-3x"></i> <p> I have experience with HTML, CSS, and Javascript, along with React, and node.js. </p></div>
      <div className="about-bullet"> <i className="fa fa-bar-chart fa-3x"></i> <p> I use R/Shiny and Stata for more complex data visualitzation, analysis, and econometric modeling.</p></div>
      <Projects />
    </div>
  </div>
)

export default App;
