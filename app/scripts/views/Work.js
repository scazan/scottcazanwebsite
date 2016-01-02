var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
Backbone.$ = $;

var Template = fs.readFileSync(__dirname + '/templates/Work.html', 'utf8');

/**
 * Work View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	template: _.template(Template),
	className: "work",
	initialize: function(){
	},
	render: function(){

		this.$el.html(this.template(this.model.attributes));
		_.each(this.model.get('categories'), function(category) {
			this.$el.addClass('category-'+category);
		}.bind(this));

		return this;
	}
});
