var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
var moment = require('moment');
Backbone.$ = $;

var Template = fs.readFileSync(__dirname + '/templates/Event.html', 'utf8');

/**
 * Event view
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	events: {
		//"click": "navigateToEvent",
	},
	template: _.template(Template),
	className: "event",
	render: function(){

		var modelAttributes = _.clone(this.model.attributes);

		modelAttributes.date = moment(modelAttributes.date).format("MM-DD-YYYY");
		this.$el.html(this.template(modelAttributes));

		return this;
	},
	navigateToEvent: function(e) {
		var name = this.model.get('name').split(' ').join('_');

		global.app.router.navigate('/events/' + name + this.model.get('event') );
		global.app.trigger('Content:loadEvents', this.model.get('events') );
		
	},
});
