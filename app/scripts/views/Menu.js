var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
Backbone.$ = $;

var Template = fs.readFileSync(__dirname + '/templates/Menu.html', 'utf8');

/**
 * Main Menu View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	events: {
		"click .about": "navigateToAbout",
		"click .events": "navigateToEvents",
		"click .works": "navigateToWorks",
	},
	template: _.template(Template),
	className: "menu",
	render: function(){

		this.$el.html(this.template());

		return this;
	},
	navigateToAbout: function(e) {
		this.navigate('/about');
	},
	navigateToEvents: function(e) {
		this.navigate('/events');
	},
	navigateToWorks: function(e) {
		this.navigate('/works');
	},
	navigate: function navigate(location) {
		global.app.router.navigate(location, {trigger: true});
	},
});
