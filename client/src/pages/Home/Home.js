import React, { Component } from 'react';
import "../Home/Home.css";
import Steve from "../Home/steve.jpeg";
import { Link } from 'react-router-dom';


// import logo from './logo.svg';

class HomePage extends Component {
  render() {
    return (
      <>
        <div className='Home'>
          <div className="container homeCont">
            <h1 className="mainTitle">Steve Shannon</h1>
            <h2 className="about">I recently earned certification from </h2>
            <h2>UNC Charlotte's Full Stack Coding Bootcamp</h2>
            <br></br>
            <h2 className="about">I am an academic scholar and have a bachelors in</h2>
            <h2>Exercise Science</h2>
            <h2>University of South Carolina</h2>
            
            
            <br></br>
            <h2 className="about">Skilled at building solutions for a variety of Web Development problems. </h2>

            <hr></hr>
     
            <div className="row">
              

              <div className="container">
                <h4>Steve Shannon</h4>
                <img className="usPic" src={Steve} alt="Steve" />
              
              </div>


            </div>
          </div>
        </div>

      </>
    );
  }
}

export default HomePage;