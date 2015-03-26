import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		// Once we get the model for FriendsShowRoute, we simply ask for its articles. And that’s what we are returning
		return this.modelFor('friends/show').get('articles');
	},
	actions: {
		save: function(model) {
			model.save();
			return false;
		}
	}
});
