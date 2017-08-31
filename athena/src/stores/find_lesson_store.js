/* 
 
	Just wanted to try out Flux, don't actually
	use this file, it would be hyper-ineffiecent


*/



import { EventEmitter } from "events";

class LessonStore extends EventEmitter {

	constructor() {
		super();
		this.selection = {
			"phase1" : 0,
			"phase2" : 0
		}
	}

	getSelections() {
		return Object.values(this.selection);
	}

	getSelectionObject() {
		return this.selection;
	}
}


const lessonStore = new LessonStore;
export default lessonStore;

