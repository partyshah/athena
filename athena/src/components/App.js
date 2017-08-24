import React, { Component } from 'react';
import '../css/App.css';
import image from '../assets/image.png';
import Header from './Header.js';
import { BrowserRouter, Route } from 'react-router-dom';

import FindLesson from './FindLesson.js';
import Landing from './Landing.js';
import UploadLesson from './UploadLesson.js'


/*

TODO: add user auth system so that we know if a user is logged in or not

*/
class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      <div className="app-body">
	        <Header loggedOut="true"/>
	        <Route exact path="/" component={Landing}></Route>
	        <Route path="FindLesson" component={FindLesson}></Route>
	       	<Route path="UploadLesson" component={UploadLesson}></Route>
	      </div>
	    </BrowserRouter>
    );
  }
}

export default App;
