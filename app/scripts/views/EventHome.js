var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
Backbone.$ = $;

var EventView = require('./Event');

var Template = fs.readFileSync(__dirname + '/templates/EventHome.html', 'utf8');

/**
 * EventHome view
 *
 * @return {Backbone.View}
 */
module.exports = EventView.extend({
	template: _.template(Template),
});
