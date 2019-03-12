import React, { Component } from 'react';
import "../Coding/Coding.css";
import Omega from "../Coding/omega.png";
import Art from "../Coding/art.png";


// import logo from './logo.svg';

class Coding extends Component {
  render() {
    return (
      <>
        <div className='Coding'>
          <div className="container CodingCont">
            <h1 className="mainTitle">Coding</h1>
            <h3 className="about">Steve recently graduated from the UNC Charlotte Stack Coding Bootcamp</h3>
            <h3 className="about">Here is some of his work</h3>

            <hr></hr>
            <div className="container">

              <div className="col md-3">
                <h4>Ωmega Chat</h4>
                <img className="usPic" src={Omega} alt="Ωmega Chat" />
                <div className="ourLinks">
                  <a className="daLink" href="https://rocky-island-31181.herokuapp.com/">
                    <i className="fab fa-github"></i></a>
                </div>
              </div>
              <div className="col md-3">
                <h4>Arti-Sense</h4>
                <img className="usPic" src={Art} alt="Steve" />
                <div className="ourLinks">
                  <a className="daLink" href="https://sshann30.github.io/FirstProject/">
                    <i className="fab fa-github"></i></a>
                </div>
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
