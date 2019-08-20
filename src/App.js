import React from 'react';
import './styles/App.min.css';
import Nav from './components/Nav';
import Resume from './components/Resume';
import Projects from './components/Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {spring, AnimatedSwitch} from 'react-router-transition';


// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};



function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
    <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
      </AnimatedSwitch>
    </div>
    </Router>
  );
}

class Home extends React.Component {

render(){
return (
  <div className="text-container">
    <h1 id="greeting">Hi! My name is Sam.</h1>
    <div id="about-me">
      <p> I'm a web developer and data analyst. </p>
      <div className="about-bullet"> <i className="fa fa-graduation-cap fa-3x"></i> <p> I recently graduated from the University of Montana with a Master's degree in Economics. </p></div>
      <div className="about-bullet"><i className="fa fa-code fa-3x"></i> <p> I have experience with HTML, CSS, and Javascript, along with React, and node.js. </p></div>
      <div className="about-bullet"> <i className="fa fa-bar-chart fa-3x"></i> <p> I use R/Shiny and Stata for more complex data visualitzation, analysis, and econometric modeling.</p></div>
      <Projects number='2' />
    </div>
  </div>
)
}

}


export default App;
