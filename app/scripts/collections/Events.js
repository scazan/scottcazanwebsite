

var Backbone = require('backbone');
var $ = require('jquery');

var EventModel = require('../models/Event');


/**
 * Events Collection
 *
 * @return {Backbone.Collection}
 */
module.exports = Backbone.Collection.extend({
	url: "/api/events",
	model: EventModel,
});
