import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		// this.store.createRecord creates a new instance of a model in the store. It takes the name of the model we’re creating and its properties
		return this.store.createRecord('article', {
			// make sure that the article is linked with our friend
			friend: this.modelFor('friends/show')
		});
	},
	actions: {
		save: function() {
			var _this = this;
			var model = this.modelFor('articles/new');
			model.save().then(function(){
				_this.transitionTo('articles');
			});
		},
		cancel: function() {
			this.transitionTo('articles');
		}
	}
});