/*jshint node:true*/
/// <reference path="../../typings/tsd.d.ts" />

'use strict';

import express = require('express');

var router = express.Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req: express.Request, res: express.Response, next) {
    res.status(200).send(data.people);
}

function getPerson(req: express.Request, res: express.Response, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}
