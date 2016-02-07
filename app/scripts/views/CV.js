var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
var moment = require('moment');
Backbone.$ = $;

var EventsCollection = require('../collections/Events');
var CVCollection = require('../collections/CVData');
var CVPublicationView = require('../views/CVPublication');
var CVExperienceView = require('../views/CVExperience');
var CVAcademicView = require('../views/CVAcademic');
var CVModel = require('../models/CVData');
var EventView = require('./CVEvent');

var Template = fs.readFileSync(__dirname + '/templates/CV.html', 'utf8');

/**
 * CV Generator View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	template: _.template(Template),
	className: "CV",
	initialize: function(){
		this.collection = new EventsCollection();
		this.CVCollection = new CVCollection();

		this.collection.comparator = function(event) {
			return -moment(event.get('date')).valueOf();
		};

		this.collection.fetch({
			success: function(collection) {
				$('body').html(this.render().el);
			}.bind(this)
		});

		this.CVCollection.fetch({
			success: function(collection) {
				$('body').html(this.render().el);
			}.bind(this)
		});

	},
	render: function(){

		this.$el.html(this.template());

		this.collection.models = this.collection.where({amComposer: true});
		this.collection.each(function(model) {
			var cvEventView = new EventView({model: model});

			this.$('.CVEvents').append(cvEventView.render().el);
		}.bind(this) );

		if(this.CVCollection.models.length > 0) {

			var header = this.CVCollection.models[0].attributes.header;
			this.$('.contactInfo').append(header);

			var experiences = this.CVCollection.models[0].attributes.experience;

			_.each(experiences, function(experience) {
				var view = new CVExperienceView({model: new CVModel(experience) });

				this.$('.CVExperiences').append(view.render().el);
			}.bind(this));

			var academics = this.CVCollection.models[0].attributes.academic;

			_.each(academics, function(academic) {
				var view = new CVAcademicView({model: new CVModel(academic) });

				this.$('.CVAcademics').append(view.render().el);
			}.bind(this));

			var publications = this.CVCollection.models[0].attributes.publications;
			_.each(publications, function(publication) {
				var view = new CVPublicationView({model: new CVModel(publication) });

				this.$('.CVPublications').append(view.render().el);
			}.bind(this));
		}

		return this;
	}
});
