
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var tracker = require('./routes/tracker');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname + '/public')));
//app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Start the track log 
tracker.createLog();

// NOTE: routing actually happens on the client (index.js)

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('/build', routes.build);
app.get('/rugbench', routes.rugbench);
app.get('/pitbullbox', routes.pitbullbox);
app.get('/dogcase', routes.dogcase);
app.get('/horsetable', routes.horsetable);
app.get('/vaderstool', routes.vaderstool);
app.get('/continuousprofiles', routes.continuousprofiles);

app.get('/hack', routes.hack);
app.get('/popgossipusa', routes.popgossipusa);
app.get('/acronymdictionary', routes.acronymdictionary);
app.get('/zobeide', routes.zobeide);
app.get('/towergame', routes.towergame);
app.get('/freebeyonce', routes.freebeyonce);
app.get('/happypoliticians', routes.happypoliticians);

app.get('/work', routes.work);
app.get('/hopper', routes.hopper);
app.get('/freefoodatbrown', routes.freefoodatbrown);
app.get('/nola', routes.nola);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
