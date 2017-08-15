import React, { Component } from 'react';
import image from '../assets/image.png';
import '../css/App.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <Header loggedOut="true"/>
        <img className="background-img" src={image}/>
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
