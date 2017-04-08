const STROGE_KEY = 'todos-lists';
export default {
	fetch () {
		return window.JSON.parse(window.localStorage.getItem(STROGE_KEY))||[];
	},
	save (items){
		window.localStorage.setItem(STROGE_KEY,window.JSON.stringify(items));
	}
}