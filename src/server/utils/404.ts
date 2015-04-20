/*jshint node:true*/
/// <reference path="../../../typings/tsd.d.ts" />

'use strict';

import express = require('express');

module.exports = utils;

function utils (app) {
    var service = {
        notFoundMiddleware: notFoundMiddleware,
        send404: send404
    };
    return service;

    function notFoundMiddleware(req: express.Request, res: express.Response, next) {
        send404(req, res, 'API endpoint not found');
    }

    function send404(req: express.Request, res: express.Response, description: string) {
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
}
