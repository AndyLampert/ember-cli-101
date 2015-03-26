import Ember from 'ember';

export default Ember.Component.extend({
	// whatever content we put in the template will be wrapped in a table row, default is a div
	tagName: 'tr',

	article: null, // passed-in
	articleStates: null, // passed-in
	// actions in components (unlike controllers) won't bubble up
	// so if we want to call an action in a Route or Controller
	// FROM a component, we have to bind the action to a prop and call it elsewhere
	actions: {
		saveArticle: function(article) {
			this.sendAction('save', article);
		}
	}
});