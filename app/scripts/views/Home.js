var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
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
	template: _.template(Template),
	initialize: function(){
	},
	className: "home",
	render: function(){

		this.$el.html( this.template() );

		// Render each Event from the collection
		if(this.events.length > 0) {

			for(var i=0; i<=2; i++) {
				this.$('.left .events').append(new EventView({model: this.events.models[i]}).render().el);
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
	}
});
