import React, { Component } from 'react';
import '../css/FindLesson.css';


class FindLesson extends Component {
	constructor(props) {
		super(props)
		this.state = { "current_render_state" : 0, "history": []};

		//this.delta = this.delta.bind(this);
	}

	genFlowTree() {
		return [<div><div className="title-0">Pick a Subject</div>
			   	<div className="button-spine-0">
			   		<div value="english" className="button-0" onClick={() => this.updateHistory("english")}> English </div>
			   		<div value="history" className="button-0" onClick={() => this.updateHistory("history")}> History </div>
			   		<div value="math" className="button-0" onClick={() => this.updateHistory("math")}> Math </div>
			   		<div value="science" className="button-0" onClick={() => this.updateHistory("science")}> Science </div>
			   		<div value="arts" className="button-0" onClick={() => this.updateHistory("arts")}> Arts </div>
			   		<div value="physical ed." className="button-0" onClick={() => this.updateHistory("physical ed.")}> Physical Ed. </div>			   		
			    </div></div>,
			    <div className="title-0">{this.state["history"][0]}</div>];
	}

	onNext = () => {
		this.setState({"current_render_state": this.state["current_render_state"] + 1}); 
	}

	updateHistory = (update) => {
		this.state["history"][this.state["current_render_state"]] = update;
	}

	render() {
		let index = this.state.current_render_state;
		let tree = this.genFlowTree();

	    return (
	      <div>
	      	{ tree[index] }
	        <div onClick={this.onNext} className="next-button">Next</div>
	      </div>
	    );
  	}
}

export default FindLesson;
