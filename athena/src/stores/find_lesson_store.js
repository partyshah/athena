import { EventEmitter } from "events";
import dispatcher from "../dispatchers/find_lesson_dispatcher";

class LessonStore extends EventEmitter {

	constructor(props) {
		super(props);

		this.state = { 
				root: "none",
				children: [
				{
					root: "english",
					children: []
				},
				{
					root: "history",
					children: []
				},
				{
					root: "math",
					children: [
					{
						root: "Kindergarten",
						children: []
					},
					{
						root: "1st Grade",
						children: []
					},
					{
						root: "2nd Grade",
						children: []
					},
					{
						root: "3rd Grade",
						children: []
					},
					{
						root: "4th Grade",
						children: []
					},
					{
						root: "5th Grade",
						children: []
					},
					{
						root: "6th Grade",
						children: []
					},
					{
						root: "Pre-Algebra",
						children: []
					},
					{
						root: "Algebra I",
						children: []
					},
					{
						root: "Algebra II",
						children: []
					},
					{
						root: "Geometry",
						children: []
					},
					{
						root: "Pre-Calculus",
						children: []
					},
					{
						root: "AP Calculus AB",
						children: []
					},
					{
						root: "AP Calculus BC",
						children: []
					},
					{
						root: "AP Statistics",
						children: []
					}
					]
				},
				{
					root: "science",
					children: []
				},
				{
					root: "arts",
					children: []
				},
				{
					root: "physical ed.",
					children: []
				}
				]
		}

	}

	//Temp function
	move(direction) {
		this.state = this.state["children"][2];
	}

	getTitle() {
		return this.state["root"];
	} 

	getSubsections(){
		return this.state["children"];
	}

	getAllSubsectionTitles(subsections) {

		// Collector for titles
		let titles = [];

		for (let child of subsections) {
			titles.push(child["root"]);
		}

		return titles; 
	}

	handleActions(action) {
		switch(action) {

		}
	}
}


const lessonStore = new LessonStore;
export default lessonStore;

