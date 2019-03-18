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
            <h3 className="about">Steve recently graduated from the UNC Charlotte Stack Coding Bootcamp</h3>
            <h3 className="about">Here is some of his work (newest to oldest, click <i className="fab fa-github"></i> for deployed link)</h3>

            <hr></hr>
            <div className="container">

              <div className="col md-3">
                <h3>Ωmega Chat (Project 3)</h3>
                <div className="ourLinks">
                  <a className="daLink" href="https://rocky-island-31181.herokuapp.com/">
                    <i className="fab fa-github"></i></a>
                </div>
                <img className="projectPic" src={Omega} alt="Ωmega Chat" />

              </div>

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Shady Servers (Project 2)</h3>
                <div className="ourLinks">
                  <a className="daLink" href="https://salty-caverns-51624.herokuapp.com/">
                    <i className="fab fa-github"></i></a>
                </div>
                <img className="projectPic" src={Shady} alt="Shady Servers" />

              </div>

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Arti-Sense (Project 1)</h3>
                <div className="ourLinks">
                  <a className="daLink" href="https://sshann30.github.io/FirstProject/">
                    <i className="fab fa-github"></i></a>
                </div>
                <img className="projectPic" src={Art} alt="Arti-Sense" />

              </div>
              

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Train Scheduler</h3>
                <div className="ourLinks">
                  <a className="daLink" href="https://sshann30.github.io/Firebase-Assignment---Train-Scheduler/">
                    <i className="fab fa-github"></i></a>
                </div>
                <img className="projectPic" src={Train} alt="Train Scheduler" />

              </div>

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Trivia Game</h3>
                <div className="ourLinks">
                  <a className="daLink" href="https://sshann30.github.io/TriviaGame/">
                    <i className="fab fa-github"></i></a>
                </div>
                <img className="projectPic" src={Trivia} alt="trivia" />

              </div>

              <br></br>
              <br></br>

              <div className="col md-3">
                <h3>Giphy Search</h3>
                <div className="ourLinks">
                  <a className="daLink" href="https://sshann30.github.io/GifTastic/">
                    <i className="fab fa-github"></i></a>
                </div>
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
