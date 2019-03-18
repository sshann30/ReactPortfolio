import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

import './Navigation.css';

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg navbar-light mb-3'>
          <Link className='navbar-brand logo' to='#'>Steve Shannon</Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
              <div className="row">
              <div className="col md-3">
                <h4></h4>
              </div>
                <Link className='nav-link'  to='/' onClick={this.toggleCollapse}><i className="fas fa-home"></i> Home   </Link>
                <div className="col md-3">
                <h4></h4>
              </div>
                <Link className='nav-link' to='/resume' onClick={this.toggleCollapse}><i class="far fa-address-card"></i> Resume   </Link>
                <div className="col md-3">
                <h4></h4>
              </div>
                <Link className='nav-link' to='/coding' onClick={this.toggleCollapse}><i className="fas fa-code"></i> Coding   </Link>
                <div className="col md-3">
                <h4></h4>
              </div>
                <Link className='nav-link' to='/music' onClick={this.toggleCollapse}><i className="fas fa-music"></i> Music   </Link>
                <div className="col md-3">
                <h4></h4>
              </div>
                </div>
              </li>
              
             
              
            </ul>
            <ul className='navbar-nav'>
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
