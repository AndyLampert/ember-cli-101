import Ember from 'ember';

export default Ember.Controller.extend({
	
	// notEmpty is a computed property that returns true if the value of the dependent property is NOT null, an empty string, empty array, or empty function.
	// So if it? has the email, true will be plugged into hasEmail
	hasEmail: Ember.computed.notEmpty('model.email'),
	hasFirstName: Ember.computed.notEmpty('model.firstName'),
	hasLastName: Ember.computed.notEmpty('model.lastName'),
	hasTwitter: Ember.computed.notEmpty('model.twitter'),
	isValid: Ember.computed.and(
		'hasEmail',
		'hasFirstName',
		'hasLastName',
		'hasTwitter'
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