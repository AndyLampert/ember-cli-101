import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('friend');
	}
});

// The Store is an Ember-Data class
// in charge of managing everything related to our model’s data. 
// It knows about all the records we
// currently have loaded in our application and it has 
// some functions that will help us to find, create,
// update, and delete records. During the whole application life cycle 
// there is a unique instance of the
// Store, and it is injected as a property into every Route, Controller, 
// Serializer, and Adapter under
// the key store. That’s why we have been calling .store in our Routes 
// and Controllers