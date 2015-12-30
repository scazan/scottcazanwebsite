var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var EventsCollection = require('../collections/Events');
var EventsView = require('../views/Events');

/**
 * Main App View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	initialize: function(){
		this.eventsView = new EventsView({collection: this.collection});
	},

	render: function(){
		this.el.appendChild(this.eventsView.render().el);
		return this;
	}
});
