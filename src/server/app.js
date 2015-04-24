/*jshint node:true*/
'use strict';
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var notfound_1 = require('./utils/notfound'); // use latest TS 1.5, inspired from ES6
//import four0four = require('./utils/notfound');
//var send404 = four0four.send404;
var app = express();
var port = process.env.PORT || 8001;
var environment = process.env.NODE_ENV;
app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api', require('./routes'));
console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);
switch (environment) {
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function (req, res, next) {
            notfound_1.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function (req, res, next) {
            notfound_1.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./src/client/index.html'));
        break;
}
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});
//# sourceMappingURL=app.js.map