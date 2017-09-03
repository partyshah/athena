import { EventEmitter } from "events";

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
				children: []
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
}


const lessonStore = new LessonStore;
export default lessonStore;

