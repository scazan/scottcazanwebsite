var Backbone = require('backbone');
var $ = require('jquery');
var AppView = require('./views/appView');
var YearsCollection = require('./collections/Years');

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
		var yearsCollection = new YearsCollection();

		yearsCollection.fetch({
			success: function(collection) {
				var indexView = new AppView({collection: collection});

				$('body').append(indexView.render().el);

			}.bind(this)
		});
	}
});
