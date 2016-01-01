

var Backbone = require('backbone');
var $ = require('jquery');

var WorkModel = require('../models/Work');


/**
 * Works Collection
 *
 * @return {Backbone.Collection}
 */
module.exports = Backbone.Collection.extend({
	url: "/api/works",
	model: WorkModel,
});
