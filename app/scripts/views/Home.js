var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
var moment = require('moment');
Backbone.$ = $;

var EventView = require('./EventHome');
var WorkView = require('./Work');

var Template = fs.readFileSync(__dirname + '/templates/Home.html', 'utf8');

/**
 * Homepage View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	events: {
		//'click .events': 'navigateToEvents'
	},
	template: _.template(Template),
	initialize: function(){
	},
	className: "home",
	render: function(){

		this.$el.html( this.template() );

		// Render each Event from the collection
		if(this.events.length > 0) {

			var todaysDate = moment().valueOf();
			var eventsToAppend = [];

			for(var i=0; i<=2; i++) {
				var model = this.events.models[i];

				// If the event is in the future, then show it
				if(todaysDate < moment(model.get('date')).valueOf()) {
					events.append.push(new EventView({model: model}).render().el);
					//this.$('.left .events').append(new EventView({model: model}).render().el);
				}
			}

			if(eventsToAppend.length > 0) {
				console.log('appending', eventsToAppend);
				_.each(eventsToAppend, function(event) {
					this.$('.left .events').append(eventsToAppend[i]);
				}, this);
			}
			else {
				console.log('hiding');
				this.$('.left').hide();
				this.$('.right').css({left: 0});
			}
		}

		if(this.works.length > 0) {
			var models = this.works.models.slice(0);
			models.sort(function() { return 0.5 - Math.random() });

			for(var i=0; i<3; i++) {
				var model = models[i];
				this.$('.right .works').append(new WorkView({model: model}).render().el);
			}
		}


		return this;
	},
	navigateToEvents: function navigateToEvents() {
		//global.app.router.navigate('/events', {trigger: true});
	},
});
