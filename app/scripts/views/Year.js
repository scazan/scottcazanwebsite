var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
Backbone.$ = $;

var Template = fs.readFileSync(__dirname + '/templates/Year.html', 'utf8');

/**
 * Year view
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	events: {
		"click": "navigateToYear",
	},
	template: _.template(Template),
	className: "year",
	render: function(){

		this.$el.html(this.template(this.model.attributes));

		return this;
	},
	navigateToYear: function(e) {
		var name = this.model.get('name').split(' ').join('_');

		global.app.router.navigate('/years/' + name + this.model.get('year') );
		global.app.trigger('Content:loadEvents', this.model.get('events') );
		
	},
});
