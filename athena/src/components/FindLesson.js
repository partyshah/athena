import React, { Component } from 'react';
import '../css/FindLesson.css';
import lessonStore from '../stores/find_lesson_store';


class FindLesson extends Component {
	constructor(props) {
		super(props)

		let flow_tree = this.genFlowTree();

		this.state = { "current_render_state" : 0, "flow_tree" : flow_tree};
	}

	genFlowTree() {
		return [this.genPickSubject, ];
	}

	genPickSubject = () => {
		let subjects = [];

		let sections = lessonStore.getSubsections();
		let sectionTitles = lessonStore.getAllSubsectionTitles(sections);

		for (let title of sectionTitles) {
			subjects.push(<div value={title} className="button-0"> {title.charAt(0).toUpperCase() + title.slice(1)} </div>);
		}

		return (
				<div>
					<div className="title-0">Pick a Subject</div>
			   		<div className="button-spine-0"> {subjects} </div>
			   	</div>
			);
	}

	onNext = () => {
		this.setState({"current_render_state": this.state["current_render_state"] + 1}); 
	}

	render = () => {
		let index = this.state.current_render_state;

	    return (
	      <div>
	      	{ this.state["flow_tree"][index]() }
	        <div onClick={this.onNext} className="next-button">Next</div>
	      </div>
	    );
  	}
}

export default FindLesson;
