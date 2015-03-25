import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
		'model.email',
		'model.firstName',
		'model.lastName',
		'twitter',
			function() {
				return !Ember.isEmpty(this.get('model.email')) &&
				!Ember.isEmpty(this.get('model.firstName')) &&
				!Ember.isEmpty(this.get('model.lastName')) &&
				!Ember.isEmpty(this.get('model.twitter'));
			}
		),
		actions: {
			save: function() {
				if (this.get('isValid')) {
					var _this = this;
					this.get('model').save().then(function(friend) {
						_this.transitionToRoute('friends.show', friend);
			});
			} else {
				this.set('errorMessage', 'You have to fill all the fields');
			}
				return false;
			},
			cancel: function() {
				return true;
		}
	}
});


// When the action save is called, we are first checking if isValid is true. If it is, then we get the model
// and call .save(). The return of save() is a promise, which allows us to write asynchronous code in a
// sync manner. The function .then receives a function that will be called when the model has been
// saved successfully to the server. When this happens, it returns an instance of our friend and then
// we can transition to the route FriendsShowRoute to see our friend’s profile