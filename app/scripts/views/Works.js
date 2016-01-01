var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
Backbone.$ = $;

var Template = fs.readFileSync(__dirname + '/templates/Works.html', 'utf8');

/**
 * Works View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	template: _.template(Template),
	className: "works",
	initialize: function(){
	},
	render: function(){

		this.$el.html(this.template());

		return this;
	}
});
