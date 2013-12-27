
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
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

// NOTE: routing actually happens on the client (index.js)

app.get('/', routes.index);
app.get('/build', routes.index);
app.get('/dogcase', routes.index);
app.get('/horsetable', routes.index);
app.get('/vaderstool', routes.index);
app.get('/continuousprofiles', routes.index);
app.get('/benches', routes.index);

app.get('/hack', routes.index);
app.get('/popgossipusa', routes.index);
app.get('/acronymdictionary', routes.index);
app.get('/zobeide', routes.index);
app.get('/towergame', routes.index);
app.get('/freebeyonce', routes.index);
app.get('/happypoliticians', routes.index);

app.get('/work', routes.index);
app.get('/hopper', routes.index);
app.get('/freefoodatbrown', routes.index);

app.get('/about', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
