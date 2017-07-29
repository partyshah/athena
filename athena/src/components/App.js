import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <Header loggedOut="true"/>
        <div className="title-container">
        	<div className="title-self">Athena</div>
        	<div className="subtitle">
        		<div className="sub1">Educate.</div> 
        		<div className="sub2">Enrich.</div> 
        		<div className="sub3">Empower.</div> 
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
