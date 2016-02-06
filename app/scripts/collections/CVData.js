

var Backbone = require('backbone');
var $ = require('jquery');

var Model = require('../models/CVData');


/**
 * CVData Collection
 *
 * @return {Backbone.Collection}
 */
module.exports = Backbone.Collection.extend({
	url: "/api/cv",
	model: Model,
});
