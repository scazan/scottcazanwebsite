var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
var moment = require('moment');
Backbone.$ = $;

var CVModel = require('../models/CVData');

var Template = fs.readFileSync(__dirname + '/templates/CVExperience.html', 'utf8');

/**
 * CV Experience View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	template: _.template(Template),
	className: "CVExperience",
	initialize: function(){
	},
	render: function(){

		var modelAttributes = this.model.attributes;

		this.$el.html(this.template(this.model.attributes));

		var positions = modelAttributes.positions;
		_.each(positions, function(position) {
			var startDate = moment(position.startDate).format("M/YYYY"),
				endDate = position.endDate == 'Present' ? 'Present' : moment(position.endDate).format("M/YYYY");

			this.$('.positions').append("<span class='title'>" + position.title + "</span>, <span class='startEndDate'>" + startDate + "-" + endDate + "</span><br/>");
		}.bind(this));

		return this;
	}
});
