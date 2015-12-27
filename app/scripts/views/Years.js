var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var YearView = require('./Year');

/**
 * Years View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	initialize: function(){
	},
	className: "years",
	render: function(){

		// Render each Year from the collection
		this.collection.each(function(model) {
			this.el.appendChild(new YearView({model: model}).render().el);
		}.bind(this));

		return this;
	}
});
