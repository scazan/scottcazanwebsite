var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
var moment = require('moment');
Backbone.$ = $;

var CVModel = require('../models/CVData');

var Template = fs.readFileSync(__dirname + '/templates/CVAcademic.html', 'utf8');

/**
 * CV Academic View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	template: _.template(Template),
	className: "CVAcademic",
	initialize: function(){
	},
	render: function(){

		var modelAttributes = this.model.attributes;

		var date;

		if(modelAttributes.startDate && modelAttributes.startDate.length) {
			date = moment(modelAttributes.startDate).format("M/YYYY");

			var endDate = modelAttributes.endDate;
			if(endDate && endDate.length) {
				date += "-" + (endDate == "Present" ? "Present" : moment(endDate).format("M/YYYY") );
			}
		}

		modelAttributes.date = date;

		this.$el.html(this.template(this.model.attributes));

		return this;
	}
});
