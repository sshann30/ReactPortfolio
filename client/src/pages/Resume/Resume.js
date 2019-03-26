import React, { Component } from 'react';
import "../Resume/Resume.css";

// import { Card, CardTitle, CardText, CardActions, CardMenu } from 'react-mdl';


// import logo from './logo.svg';

class Coding extends Component {
  render() {
    return (
      <>
        <div className='Resume'>
        <h1 className="mainTitle">Resume</h1>
          

            {/* <div className="container">
            <iframe height ="1000" width ="820"src="https://docs.google.com/document/d/e/2PACX-1vTvf-0P2m8wQoUjw5z0El0BM_h8zpNReUw9Mz_29q1Y04EFrrqSxuPNL7alHC6-JqejgF2qR36cY8fq/pub?embedded=true" allowfullscreen></iframe>
            </div> */}

            <div className="iframe-container">
            <iframe className="resp-iframe" height ="1000" width ="200"src="https://docs.google.com/document/d/e/2PACX-1vTvf-0P2m8wQoUjw5z0El0BM_h8zpNReUw9Mz_29q1Y04EFrrqSxuPNL7alHC6-JqejgF2qR36cY8fq/pub?embedded=true" allowfullscreen></iframe>
            
        <br></br>
        <br></br>

</div>


        </div>
        <br></br>
        <br></br>
      </>
    );
  }
}

export default Coding;
