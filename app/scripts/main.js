var $ = require('jquery')(window);
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;

var Router = require('./router');

this.router = new Router();


global.app = _.extend(this, Backbone.Events);

Backbone.history.start({
	pushState: true
});
