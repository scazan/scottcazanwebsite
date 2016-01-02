var Backbone = require('backbone');
var $ = require('jquery');
var Masonry = require('masonry-layout');
var fs = require('fs');
var _ = require('underscore');
Backbone.$ = $;

var WorksCollection = require('../collections/Works');
var EventsCollection = require('../collections/Events');

var EventsView = require('../views/Events');
var AboutView = require('../views/About');
var WorksView = require('../views/Works');
var MenuView = require('../views/Menu');

var Template = fs.readFileSync(__dirname + '/templates/App.html', 'utf8');

/**
 * Main App View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	template: _.template(Template),
	id: "main",
	initialize: function initialize() {
	},

	render: function render(){

		this.$el.html( this.template() );
		this.createSubViews();

		return this;
	},

	createSubViews: function renderSubViews() {
		this.menuView = new MenuView();
		this.$('#menu').html(this.menuView.render().el);

		var eventsCollection = new EventsCollection();

		this.eventsView = new EventsView({collection: eventsCollection});
		this.aboutView = new AboutView();

		var worksCollection = new WorksCollection();
		worksCollection.comparator = "sortOrder";
		this.worksView = new WorksView({collection: worksCollection});
	},

	showIndex: function showEvents() {
	},

	showEvents: function showEvents() {
		this.$('#content').html(this.eventsView.render().el);
		this.eventsView.collection.fetch({
			success: function(collection) {
				this.eventsView.render();
			}.bind(this)
		});
	},

	showAbout: function showEvents() {
		this.$('#content').html(this.aboutView.render().el);
	},

	showWorks: function showEvents() {
		this.$('#content').html(this.worksView.render().el);
		this.worksView.collection.fetch({
			success: function(collection) {
				this.worksView.render();

				this.worksView.reMasonLayout();
			}.bind(this)
		});

		window.setTimeout(function rebind() {
			this.worksView.reMasonLayout();
		}.bind(this), 200);
	},

});
