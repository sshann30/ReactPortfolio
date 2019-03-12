import React, { Component } from 'react';
import "../Home/Home.css";
import Steve from "../Home/steve.jpeg";


// import logo from './logo.svg';

class HomePage extends Component {
  render() {
    return (
      <>
        <div className='Home'>
          <div className="container homeCont">
            <h1 className="mainTitle">Steve Shannon's Portfolio</h1>
            <h2 className="about">Steve Shannon is a Recent Graduate from </h2>
            <h3 className="about">UNC Charlotte Front and Back End Coding Bootcamp.</h3>
            <br></br>
            <h2 className="about">He has a Bachelors in</h2>
            <h3 className="about">Exercise Science from The University of South Carolina.</h3>
            <hr></hr>
            <div className="row">
              <div className="col md-3">
                <h4></h4>
              </div>

              <div className="col md-3">
                <h4>Steve Shannon</h4>
                <img className="usPic" src={Steve} alt="Steve" />
                <div className="ourLinks">
                  <a className="daLink" href="https://github.com/sshann30">
                    <i className="fab fa-github"></i></a>
                  <a className="daLink" href="https://www.linkedin.com/in/steven-shannon-03aa8b59/">
                    <i className="fab fa-linkedin"></i></a>
                  <a className="daLink" href="https://soundcloud.com/steve-cannon-shannon">
                    <i className="fab fa-soundcloud"></i></a>



                </div>
              </div>

              <div className="col md-3">
                <h4></h4>
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

export default HomePage;