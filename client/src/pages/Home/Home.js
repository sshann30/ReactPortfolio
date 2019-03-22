import React, { Component } from 'react';
import "../Home/Home.css";
import Steve from "../Home/steve.jpeg";
import { Link } from 'react-router-dom';


// import logo from './logo.svg';

class HomePage extends Component {
  render() {
    return (
      <>
        {/* <div className='Home'>
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

              <div className="col md-6">
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

        </div> */}

        {/* this is the markup. you can change the details (your own name, your own avatar etc.) but don’t change the basic structure! */}



<div className="container">
        <aside className="profile-card">
          <header>
            <img className="usPic" src={Steve} alt="Steve" />
            <br></br>
            <br></br>
            <div className='navbar-brand logo' to='#'>Steve Shannon</div>
            <br></br>
            <p >Full Stack Web Dev </p>
            
            
          </header>
        
          <div className="profile-bio">
            <br></br>
            <p >Recent Graduate from </p>
            <h4 >UNC Charlotte Front and Back End Coding Bootcamp.</h4>
          
            <p >Bachelors in</p>
            <h4 >Exercise Science from The University of South Carolina.</h4>


          </div>
        
          {/* <ul className="profile-social-links">
            <div className="ourLinks">
              <a className="daLink" href="https://github.com/sshann30">
                <i className="fab fa-github"></i></a>
              <a className="daLink" href="https://www.linkedin.com/in/steven-shannon-03aa8b59/">
                <i className="fab fa-linkedin"></i></a>

              <a className="daLink" href="https://soundcloud.com/steve-cannon-shannon">
                <i className="fab fa-soundcloud"></i></a>
            </div>
        
          </ul> */}
          
        </aside>
        <br></br>
        <br></br>

        </div>

        <br></br>
        <br></br>
      </>
    );
  }
}

export default HomePage;