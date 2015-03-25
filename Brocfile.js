/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var app = new EmberApp();
// tell ember-cli that we want to import those assets into our application
app.import('bower_components/picnic/releases/latest.min.css');
app.import('vendor/fontello/fontello.css');
app.import('vendor/fontello/font/fontello.ttf', {
	// destDir tells ember-cli that we want to put those files under a directory called font
	destDir: 'font'
});
app.import('vendor/fontello/font/fontello.eot', {
	destDir: 'font'
});
app.import('vendor/fontello/font/fontello.svg', {
	destDir: 'font'
});
app.import('vendor/fontello/font/fontello.woff', {
	destDir: 'font'
});

module.exports = app.toTree();




