var App = Ember.Application.create();

App.Router.map(function() {
	this.resource('home', { path: '/' });
	this.resource('about', { path: '/about' });
	this.resource('contact', { path: '/contact' });
});