import React from 'react';

const projectArr = [
  {name: "Ski Searcher", description: `An interactive leaflet.js map
    that provides information about North American Ski resorts. If the
    user clicks on a point in the map in the United States, the app calls
    the NOAA API to get a forecast for that point.`,
    url: "www.averageanalytics.com/snow-forecast",
    github: 'https://github.com/niedermansam/snow-forecast',
    keywords: ["API", "Javascript", "leaflet.js"],
    img: require('./photos/ski-resort-explorer.PNG')
  },
  {name: "Census Time Series", description: `A Javascript application
    that uses plotly to visualize American Community Survey data from
     2010 to present.`,
    url: 'www.averageanalytics.com/census-search/',
    github: 'https://github.com/niedermansam/census-search',
    keywords: ["API", "data visualization", ""],
    img: require('./photos/census-searcher-tool.PNG')
  },
  {name: "Trump Twittermap", description: `An R/Shiny application
    that visualizes the twitter habits of the 45th President of the
    United States. (This one takes a while to load and is out of date)`,
    url: 'http://68.183.17.153:3838/trump-tweets/',
    github: '',
    keywords: ["R/Shiny", "data visualization", "ggplot"],
    img: require('./photos/trump-twitter-map.PNG')
  }
]

function Projects() {
  return (
    <div className="text-container">
      <h1>Projects</h1>
      {
        projectArr.map( (project, index) => {
          project.key = index;
          return new ProjectCard(project);
        })
      }
    </div>
  );
}

function ProjectCard(props){

  let divStyle = { backgroundImage: `url('${props.img}')` }


  return (
    <div className="project-card" style={divStyle} key={props.key}>
        <h2 className="project-name">{props.name}</h2>
        <div className="project-card-overlay">
        <p className="project-description">{props.description}</p>
        </div>
        <div className="project-button-bar">
        <a href={props.url} target="_blank" rel="noopener noreferrer"><button>Project</button></a>
        <a href={ props.github} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
        </div>
    </div>
  )
}

export default Projects;
