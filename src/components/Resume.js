import React from 'react';

class Resume extends React.Component {

  render(){
  return (
    <div id="resume"  className="text-container">
      <h1>Resume</h1>
      <div className="text-container">
        <h2>Education</h2>
        <p> <strong>BA in Economics,</strong> University of Montana, 2017</p>
        <p><strong>BA in Spanish,</strong> University of Montana, 2017</p>
        <p><strong>MA in Economics,</strong> University of Montana, 2019</p>
        <h2>Experience</h2>
        <p>Graduate Teaching Assistant - University of Montana, August 2017 - May 2019 </p>
        <p>Digital Media Intern - Montana World Affairs Council, June 2016- May 2017 </p>
      </div>
    </div>
  );

}
}

export default Resume;
