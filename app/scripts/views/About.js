var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
Backbone.$ = $;

var Template = fs.readFileSync(__dirname + '/templates/About.html', 'utf8');

/**
 * About View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	template: _.template(Template),
	className: "about",
	initialize: function(){
	},
	render: function(){

		this.$el.html(this.template());

		return this;
	}
});
