var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var YearsCollection = require('../collections/Years');
var YearsView = require('../views/Years');

/**
 * Main App View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	initialize: function(){
		this.yearsView = new YearsView({collection: this.collection});
	},

	render: function(){
		this.el.appendChild(this.yearsView.render().el);
		return this;
	}
});
