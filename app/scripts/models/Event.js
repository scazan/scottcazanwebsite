var $ = require('jquery')(window);
var Backbone = require('backbone');
Backbone.$ = $;

/**
 * Event model
 *
 * @return {undefined}
 */
module.exports = Backbone.Model.extend({
	defaults: {
		venue: undefined,
		cvDescription: undefined,
		piece: undefined,
		amComposer: true,
		category: "performance",
		address: undefined,
		address2: undefined,
		city: undefined,
		state: undefined,
		zip: undefined,
		country: undefined,
	}
});
