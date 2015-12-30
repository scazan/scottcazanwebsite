var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var EventView = require('./Event');

/**
 * Events View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	initialize: function(){
	},
	className: "events",
	render: function(){

		// Render each Event from the collection
		this.collection.each(function(model) {
			this.el.appendChild(new EventView({model: model}).render().el);
		}.bind(this));


		return this;
	}
});
