module.exports = function(options) {

	var express = require('express');
		_ = require('underscore'),
		http = require('http'),
		path = require('path'),
		fs = require('fs'),
		events = require('events'),
		mongoDB = require('mongodb').Db,
		Server = require('mongodb').Server,
		ObjectID = require('mongodb').ObjectID;


	this.db = new mongoDB('websiteTemp', new Server("localhost", 27017, {auto_reconnect: true}, {}));


	// WEB
	app = express();

	events.EventEmitter.call(this);
	_.extend(this, events.EventEmitter.prototype);

	var port = options.port || '9001';
	this.port = port;

	//// simple log
	app.use(function(req, res, next){
		console.log('%s %s', req.method, req.url);
		next();
	});


	this.server = http.createServer(app);

	app.use(express.static( path.join( __dirname, '../../dist') ));
	app.use(express.static( path.join( __dirname, '../../.tmp') ));


	// All calendar events
	app.get('/api/events', function(req, res){
		this.db.open(function() {
			this.db.collection('events', function(error, collection) {
				collection.find().toArray(function(e, results) {
					res.send( results );
					//db.close();
				});

			});
		});
	});

	app.get('/api/works', function(req, res){
		this.db.open(function() {
			this.db.collection('works', function(error, collection) {
				collection.find().toArray(function(e, results) {
					res.send( results );
					//db.close();
				});

			});
		});
	});

	app.get('*', function(req, res){
		res.sendfile( path.join( __dirname, '../../dist/index.html' ) );
	});

	WebServer = {
		/**
		 * start the server listening and return a Promise
		 *
		 * @return {Promise}
		 */
		start: function() {
			var server = this.server,
				port = this.port;

			return new Promise(function(resolve, reject) {
				server.listen(port, function(){
					console.log('Webserver has started!');

					resolve(server);
				});
			});
		},
	}


	_.extend(this, WebServer);
	return this;
};

