

var Backbone = require('backbone');
var $ = require('jquery');

var YearsModel = require('../models/Year');


/**
 * Years Collection
 *
 * @return {Backbone.Collection}
 */
module.exports = Backbone.Collection.extend({
	url: "/api/years",
	model: YearsModel,
});
