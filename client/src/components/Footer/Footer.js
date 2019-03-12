import React, { Component } from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (

      <>

        {/* // <footer className="footer"> */}
        {/* //   <div>
      //     Steve Shannon
      //     &copy;
      // </div>




      // </footer> */}


        <footer>

          <div className="centered clearfix">
            <Link className='nav-link' to='/' onClick={this.toggleCollapse}><i className="fas fa-home"></i> Home</Link>
            <div className="footer-links-holder">
              <Link className='nav-link' to='/coding' onClick={this.toggleCollapse}><i className="fas fa-code"></i> Coding</Link>
            </div>
            <div className="footer-links-holder">
              <Link className='nav-link' to='/music' onClick={this.toggleCollapse}><i className="fas fa-music"></i> Music</Link>
            </div>

          </div>

          <br></br>
          <div className="centered clearfix">

            <div className="ourLinks centered clearfix">
              <a className="daLink" href="https://github.com/sshann30">
                <i className="fab fa-github"></i></a>
              <a className="daLink" href="https://www.linkedin.com/in/steven-shannon-03aa8b59/">
                <i className="fab fa-linkedin"></i></a>
              <a className="daLink" href="https://soundcloud.com/steve-cannon-shannon">
                <i className="fab fa-soundcloud"></i></a>
            </div>
            <br></br>
            <div className="centered clearfix">
              <h4><a href="mailto:">sshann30@gmail.com</a></h4>
            </div>
            <br></br>
            <div className="centered clearfix">
              <h4>919-265-9477</h4>
            </div>

          </div>



          <div className="bottom-bar">
            Steve Shannon © 2019
          </div>
        </footer>












      </>


    );
  }
};

export default Footer;


