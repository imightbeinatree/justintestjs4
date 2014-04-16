/*
 * node
 * homepage_url
 *
 * Copyright (c) 2014 Cloudspace
 * Licensed under the license license.
 */

var express = require('express')
  , http = require('http')
  , favicon = require('static-favicon')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  ;

var app = express();

// Basics
app.set('port', process.env.PORT || 80);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/app'));
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.session({ secret: 'gobbledygook' }));



http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
