/*jshint node:true*/

'use strict';

import express = require('express');
import favicon = require('serve-favicon');
import logger = require('morgan');
import bodyParser = require('body-parser');
import { send404 } from './utils/notfound';  // use latest TS 1.5, inspired from ES6
//import four0four = require('./utils/notfound');

//var send404 = four0four.send404;

var app: express.Express = express();
var port: number = process.env.PORT || 8001;
var environment: string = process.env.NODE_ENV;

app.use(favicon(__dirname + '/favicon.ico'))
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
        app.use('/app/*', (req: express.Request, res: express.Response, next: any) => {
            send404(req, res);
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
        app.use('/app/*', (req: express.Request, res: express.Response, next: any) => {
            send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});
