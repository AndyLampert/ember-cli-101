// inherit from base and override the cancel action:

import FriendsBaseController from './base';

export default FriendsBaseController.extend({
	actions: {
		cancel: function() {
			this.transitionToRoute('friends.index');
			return false;
		}
	}
});