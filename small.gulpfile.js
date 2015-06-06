/// <reference path="src/server/tsd-server.d.ts"/>

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });

/**
 * serve the dev environment
 * --debug-brk or --debug
 * --nosync
 */
gulp.task('serve-dev', function () {
    log(process.argv);
    var nodeOptions = {
        script: './src/server/app.js',
        delayTime: 1,
        env: {
            'PORT': 8001,
            'NODE_ENV': 'dev'
        },
        watch: ['./src/server/'],
        nodeArgs: ['--debug=5858']
    };

    return $.nodemon(nodeOptions);
});

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

module.exports = gulp;
