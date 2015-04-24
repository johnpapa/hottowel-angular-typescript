/*jshint node:true*/
'use strict';
//TODO EG type next argument
function notFoundMiddleware(req, res, next) {
    send404(req, res, 'API endpoint not found');
}
exports.notFoundMiddleware = notFoundMiddleware;
function send404(req, res, description) {
    var data = {
        status: 404,
        message: 'Not Found',
        description: description,
        url: req.url
    };
    res.status(data.status)
        .send(data)
        .end();
}
exports.send404 = send404;
//# sourceMappingURL=notfound.js.map