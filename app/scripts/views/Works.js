var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
Backbone.$ = $;

var WorkView = require('./Work');

var Template = fs.readFileSync(__dirname + '/templates/Works.html', 'utf8');

/**
 * Works View
 *
 * @return {Backbone.View}
 */
module.exports = Backbone.View.extend({
	events: {
		'click li.music': 'toggleMusic',
		'click li.scores': 'toggleScores',
		'click li.installation': 'toggleInstallation',
		'click li.code': 'toggleCode',
		'click li.all': 'showAll',
	},
	template: _.template(Template),
	className: "works",
	initialize: function(){
		this.showingAll = true;
	},
	render: function(){

		this.$el.html(this.template());
		this.delegateEvents();

		this.collection.each(function(work) {
			var workView = new WorkView({model: work});

			this.$('.workContents').append(workView.render().el);
		}.bind(this));

		return this;
	},

	anyItemsMuted: function anyItemsMuted() {
		if(this.$('li.muted').length == 0) {
			return false;
		}

		return true;
	},
	toggleMusic: function toggleMusic() {
		this.toggleCategory('music');
	},

	toggleScores: function toggleScores() {
		this.toggleCategory('scores');
	},

	toggleInstallation: function toggleInstallation() {
		this.toggleCategory('installation');
	},

	toggleCode: function toggleCode() {
		this.toggleCategory('code');
	},
	toggleCategory: function(category) {
		if(this.anyItemsMuted()) {
			if(this.$('li.'+category).hasClass('muted')) {
				this.$('li.'+category).removeClass('muted');
				this.$('.category-'+category).show();
			}
			else {
				this.$('li.'+category).addClass('muted');
				this.$('.category-'+category).hide();
			}
		}
		else {
			this.$('.menu li').addClass('muted');
			this.$('.menu li.'+category).removeClass('muted');

			this.$('.work').hide();
			this.$('.category-'+category).show();
		}
	},

	showAll: function showAll() {
		this.$('.work').show();
		this.$('.menu li').removeClass('muted');
	},
});
