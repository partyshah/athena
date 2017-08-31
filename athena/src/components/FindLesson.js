import React, { Component } from 'react';
import '../css/FindLesson.css';


class FindLesson extends Component {
	constructor(props) {
		super(props)
		this.state = { "current_render_state" : 0 };
	}

	genFlowTree() {
		return [<div><div className="title-0">Pick a Subject</div>
			   	<div className="button-spine-0">
			   		<div className="button-0"> English </div>
			   		<div className="button-0"> History </div>
			   		<div className="button-0"> Math </div>
			   		<div className="button-0"> Science </div>
			   		<div className="button-0"> Arts </div>
			   		<div className="button-0"> Physical Ed. </div>			   		
			    </div></div>];
	}

	onNext() {
		this.setState({"current_render_state": this.state["current_render_state"] + 1}); 
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
