var $ = require('jquery')(window);
var Backbone = require('backbone');
Backbone.$ = $;

/**
 * CV model
 *
 * @return {undefined}
 */
module.exports = Backbone.Model.extend({
	defaults: {
		publications: [],
	}
});
