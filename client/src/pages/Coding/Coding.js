import React, { Component } from 'react';
import "../Coding/Coding.css";
import Omega from "../Coding/omega.png";
import Art from "../Coding/art.png";
import Giphy from "../Coding/giphyresume.png";
import Trivia from "../Coding/Trivia.png";
import Shady from "../Coding/Shady.png";
import Train from "../Coding/Train.png";

// import { Card, CardTitle, CardText, CardActions, CardMenu } from 'react-mdl';


// import logo from './logo.svg';

class Coding extends Component {
  render() {
    return (
      <>
        <div className='Coding'>
          <div className="container CodingCont">
            <h1 className="mainTitle">Coding</h1>
            <h3 className="about">I recently graduated from the UNC Charlotte Stack Coding Bootcamp</h3>
            <h3 className="about">Here is some of my work (newest to oldest)</h3>

            <hr></hr>
            <div className="container">

              <div className="col md-3">
                <h3>Ωmega Chat (Project 3)</h3>
                <a href="https://github.com/mspenski/Omega-Chat">Github Link</a>
                
                <a href="https://rocky-island-31181.herokuapp.com/">         Deployed Link</a>
                <br></br>
                <img className="projectPic" src={Omega} alt="Ωmega Chat" />

              </div>

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Shady Servers (Project 2)</h3>
                <a href="https://github.com/sshann30/Project2RoughStart">Github Link</a>
                <a href="https://salty-caverns-51624.herokuapp.com/">         Deployed Link</a>
                <br></br>
                <img className="projectPic" src={Shady} alt="Shady Servers" />

              </div>

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Arti-Sense (Project 1)</h3>
                <a href="https://github.com/sshann30/FirstProject">Github Link</a>
                <a href="https://sshann30.github.io/FirstProject/">         Deployed Link</a>
                <br></br>
                <img className="projectPic" src={Art} alt="Arti-Sense" />

              </div>
              

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Train Scheduler</h3>
                <a href="https://github.com/sshann30/Firebase-Assignment---Train-Scheduler">Github Link</a>
                <a href="https://sshann30.github.io/Firebase-Assignment---Train-Scheduler/">         Deployed Link</a>
                <br></br>
                <img className="projectPic" src={Train} alt="Train Scheduler" />

              </div>

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Trivia Game</h3>
                <a href="https://github.com/sshann30/TriviaGame">Github Link</a>
                <a href="https://sshann30.github.io/TriviaGame/">         Deployed Link</a>
                <br></br>
                <img className="projectPic" src={Trivia} alt="trivia" />

              </div>

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Giphy Search</h3>
                <a href="https://github.com/sshann30/GifTastic">Github Link</a>
                <a href="https://sshann30.github.io/GifTastic/">         Deployed Link</a>
                <br></br>
                <img className="projectPic" src={Giphy} alt="Giphy Search" />

              </div>





            </div>

          </div>

        </div>
        <br></br>
        <br></br>
      </>
    );
  }
}

export default Coding;
