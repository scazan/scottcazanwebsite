var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
var moment = require('moment');
Backbone.$ = $;

var CVModel = require('../models/CVData');

var Template = fs.readFileSync(__dirname + '/templates/CVPublication.html', 'utf8');

/**
 * CV Publication View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	template: _.template(Template),
	className: "CVPublication",
	initialize: function(){
	},
	render: function(){

		var modelAttributes = this.model.attributes;

		modelAttributes.date = moment(modelAttributes.date).format("MM-YYYY");
		this.$el.html(this.template(this.model.attributes));

		return this;
	}
});
