'use strict';

const uniqid = require('uniqid');
const response = require('../../tools/response');
const file = require('../../tools/file');

const content = file.getContent('../THEME.json');

exports.getAllTHEME = function (req, res) {
    res.send(
        response(content, 'getAll', null)
    );
};

exports.createTHEME = function (req, res) {
    try {
        const author = req.body.author;
        if (author !== undefined && author !== '') {
            const THEME = {
                'id': uniqid(),
                'author': author
            };
            content.push(THEME);
            res.status(201);
            res.send(response(THEME, 'create', null));
        }
        else {
            res.status(400);
            res.send(response(null, 'create', 'missing author field'));
        }
    } catch (e) {
        res.status(500);
        res.send(response(null, 'create', 'not a json'));
    }
};

exports.getTHEME = function(req, res) {
    const id = req.params.THEMEId;
    console.log(req.params);
    for (let i = 0; i < Number(content.length); i++) {
        if (content[i].id === id) {
            res.send(response(content[i], 'get', null));
            return;
        }
    }
    res.status(404);
    res.send(response(null, 'get', 'id not found'));
};

exports.updateTHEME = function(req, res) {
    const id = req.params.THEMEId;
    const author = req.body.author;
    for (let i = 0; i < Number(content.length); i++) {
        if (content[i].id === id) {
            res.status(501);
            res.send(response(content[i], 'put', 'not implemented :)'));
            return;
        }
    }
    res.status(404);
    res.send(response(null, 'put', 'id not found'));
};

exports.deleteTHEME = function (req, res) {
    const id = req.params.THEMEId;
    for (let i = 0; i < Number(content.length); i++) {
        if (content[i].id === id) {
            const del = content[i];
            content.splice(i, 1);
            res.send(response(del, 'delete', null));
            return;
        }
    }
    res.status(404);
    res.send(response(null, 'delete', 'id not found'));
};