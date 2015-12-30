var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
Backbone.$ = $;

var Template = fs.readFileSync(__dirname + '/templates/Event.html', 'utf8');

/**
 * Event view
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	events: {
		"click": "navigateToEvent",
	},
	template: _.template(Template),
	className: "event",
	render: function(){

		var modelAttributes = this.model.attributes;

		modelAttributes.date = modelAttributes.date? modelAttributes.date.slice(0,10) : "";
		this.$el.html(this.template(modelAttributes));

		return this;
	},
	navigateToEvent: function(e) {
		var name = this.model.get('name').split(' ').join('_');

		global.app.router.navigate('/events/' + name + this.model.get('event') );
		global.app.trigger('Content:loadEvents', this.model.get('events') );
		
	},
});
