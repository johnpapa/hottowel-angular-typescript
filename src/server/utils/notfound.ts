/*jshint node:true*/

'use strict';

import express = require('express');

//TODO EG type next argument
export function notFoundMiddleware(req: express.Request, res: express.Response, next:any) {
    send404(req, res, 'API endpoint not found');
}

export function send404(req: express.Request, res: express.Response, description?: string) {
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
