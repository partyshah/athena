import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Header.css';

class Header extends Component {

  render() {
    return (
      <div className="header-body">
      	<div className="button-container">
      		<div className="button find-lesson">Find Lesson</div>
      		<div className="button upload-lesson">Upload Lesson</div>
      		<div className="button sign-up">Sign Up</div>
      	</div>
      </div>
    );
  }
}

export default Header;