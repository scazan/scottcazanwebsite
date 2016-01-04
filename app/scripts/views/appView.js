var Backbone = require('backbone');
var $ = require('jquery');
var Masonry = require('masonry-layout');
var fs = require('fs');
var _ = require('underscore');
var moment = require('moment');
Backbone.$ = $;

var WorksCollection = require('../collections/Works');
var EventsCollection = require('../collections/Events');

var HomeView = require('../views/Home');
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
	events: {
		'click #header': 'showIndex'
	},
	template: _.template(Template),
	id: "main",
	initialize: function initialize() {
		this.eventsCollection = new EventsCollection();
		this.eventsCollection.comparator = function(event) {
			return -moment(event.get('date')).valueOf();
		};

		this.worksCollection = new WorksCollection();
		this.worksCollection.comparator = "sortOrder";

		this.homeView = new HomeView();
		this.homeView.events = this.eventsCollection;
		this.homeView.works = this.worksCollection;

		this.eventsCollection.fetch({
			success: function(collection) {
				this.homeView.render();
			}.bind(this)
		});

		this.worksCollection.fetch({
			success: function(collection) {
				this.homeView.render();
			}.bind(this)
		});
	},

	render: function render(){

		this.$el.html( this.template() );
		this.menuView = new MenuView();
		this.$('#menu').html(this.menuView.render().el);

		this.createSubViews();
		this.$('#content').append(this.homeView.render().el);

		return this;
	},

	createSubViews: function renderSubViews() {

		this.eventsView = new EventsView({collection: this.eventsCollection});
		this.aboutView = new AboutView();

		this.worksView = new WorksView({collection: this.worksCollection});
	},

	showIndex: function showEvents() {
		global.app.router.navigate("/", {trigger: false});
		this.$el.html( this.template() );
		this.$('#menu').html(this.menuView.render().el);
		this.$('#content').append(this.homeView.render().el);

		window.scrollTo(0, 0);
	},

	showEvents: function showEvents() {
		this.$('#content').html(this.eventsView.render().el);
		this.eventsView.collection.fetch({
			success: function(collection) {
				collection.each(function(model) {
					model.set('date', moment(model.get('date')).valueOf() );
				}.bind(this));

				collection.sort();
				this.eventsView.render();
			}.bind(this)
		});

		window.scrollTo(0, 0);
	},

	showAbout: function showEvents() {
		this.$('#content').html(this.aboutView.render().el);
		window.scrollTo(0, 0);
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

		window.scrollTo(0, 0);
	},

});
