import React, { Component } from 'react';
import '../css/App.css';
import image from '../assets/image.png';
import Header from './Header.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FindLesson from './FindLesson.js';
import Landing from './Landing.js';
import UploadLesson from './UploadLesson.js'


/*

TODO: Add user auth system so that we know if a user is logged in or not
TODO: Fix the return to home screen bug that gets rid of the nav bar
TODO: Fix logo resizing issue... or for that matter, all resizing issues. 

*/
class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      <div className="app-body">
	        <Header loggedOut="true"/>
	        <Route exact path="/" component={Landing} />
	        <Route path="/findlesson" component={FindLesson} />
	       	<Route path="/uploadlesson" component={UploadLesson} />
	      </div>
	    </BrowserRouter>
    );
  }
}

export default App;
