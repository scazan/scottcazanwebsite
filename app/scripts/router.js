var Backbone = require('backbone');
var $ = require('jquery');
var AppView = require('./views/appView');
var EventsCollection = require('./collections/Events');

Backbone.$ = $;

/**
 * Main Router
 *
 * @return {Backbone.Router}
 */
module.exports = Backbone.Router.extend({
	routes: {
		"(/)": "index"
	},

	index: function() {
		var eventsCollection = new EventsCollection();

		eventsCollection.fetch({
			success: function(collection) {
				var indexView = new AppView({collection: collection});
				console.log(indexView.render().el);

				$('body').append(indexView.render().el);

			}.bind(this)
		});
	}
});
