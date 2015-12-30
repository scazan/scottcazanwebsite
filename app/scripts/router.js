var Backbone = require('backbone');
var $ = require('jquery');
var AppView = require('./views/appView');

Backbone.$ = $;

/**
 * Main Router
 *
 * @return {Backbone.Router}
 */
module.exports = Backbone.Router.extend({
	initialize: function intialize() {
		this.initBaseViews();
	},

	routes: {
		"(/)": "index",
		"about(/)": "loadAbout",
		"events(/)": "loadEvents"
	},

	initBaseViews: function() {
		if(!this.baseViewsInitialized) {
			this.appView = new AppView();

			$('body').append(this.appView.render().el);

			this.baseViewsInitialized = true;
		}
	},

	index: function() {
		this.appView.showIndex();
	},

	loadAbout: function loadAbout() {
		this.appView.showAbout();
	},

	loadEvents: function loadAbout() {
		this.appView.showEvents();
	},
});
