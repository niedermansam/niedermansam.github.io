import React from 'react';

const projectArr = [
  {name: "Ski Searcher", description: `An interactive leaflet.js map
    that provides information about North American Ski resorts. If the
    user clicks on a point in the map in the United States, the app calls
    the NOAA API to get a forecast for that point.`,
    url: "www.averageanalytics.com/snow-forecast",
    github: '',
    keywords: ["API", "Javascript", "leaflet.js"]
  },
  {name: "Census Time Series", description: `A Javascript application
    that uses plotly to visualize American Community Survey data from
     2010 to present.`,
    url: 'www.averageanalytics.com/census-search/',
    github: '',
    keywords: ["API", "data visualization"]
  },
  {name: "Trump Twittermap", description: `An R/Shiny application
    that visualizes the twitter habits of the 45th President of the
    United States.`,
    url: '',
    github: '',
    keywords: ["R/Shiny", "data visualization", "ggplot"]
  }
]

function Projects() {
  return (
    <div className="text-container">
      <h1>Projects</h1>
      {
        projectArr.map(project => {
          return new ProjectCard(project)
        })
      }
    </div>
  );
}

function ProjectCard(props){
  return (
    <div className="project-card">
        <h2 className="project-name">{props.name}</h2>
        <div className="project-card-overlay">
        <p className="project-description">{props.description}</p>
        </div>
        <div>
        <a href={"//" + props.url} target="_blank"><button>Project</button></a>
        <a href={props.github}><button>GitHub</button></a>
        </div>
    </div>
  )
}

export default Projects;
