import React, { Component } from 'react';
import image from '../assets/image.png';
import '../css/Landing.css';

/*

TODO: add user auth system so that we know if a user is logged in or not

*/
class Landing extends Component {
  render() {
    return (
      <div>
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

export default Landing;