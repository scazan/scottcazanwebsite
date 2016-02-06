var Backbone = require('backbone');
var $ = require('jquery');
var AppView = require('./views/appView');
var CVView = require('./views/CV');

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
		"events(/)": "loadEvents",
		"cv(/)": "loadCV",
		"works(/)": "loadWorks"
	},

	initBaseViews: function() {
		if(!this.baseViewsInitialized) {
			this.appView = new AppView();

			$('body').append(this.appView.render().el);

			this.baseViewsInitialized = true;
		}

		console.log('loaded');
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

	loadWorks: function loadAbout() {
		this.appView.showWorks();
	},
	loadCV: function loadAbout() {
		var cvView = new CVView();

		$('body').addClass('CVView');
		$('body').html(cvView.render().el);
		console.log('CV loaded');
	},
});
