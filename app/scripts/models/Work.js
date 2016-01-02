var $ = require('jquery')(window);
var Backbone = require('backbone');
Backbone.$ = $;

/**
 * Work model
 *
 * @return {undefined}
 */
module.exports = Backbone.Model.extend({
	defaults: {
		title: undefined,
		score: undefined,
		image: undefined,
		video: undefined,
		media: undefined,
		description: undefined,
		categories: [],
	}
});
