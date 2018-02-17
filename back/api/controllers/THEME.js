'use strict';

const uniqid = require('uniqid');
const response = require('../../response');
const file = require('../../file');

var content = file.getContent('THEME.json');

exports.getAllTHEME = function (req, res) {
    res.send(
        response(content, 'getAll', null)
    );
};

exports.createTHEME = function (req, res) {
    try {
        var author = req.body.author;
        if (author !== undefined) {
            var THEME = {
                'id': uniqid(),
                'author': author
            };
            content.push(THEME);
            res.send(response(THEME, 'create', null));
        }
        else {
            res.send(response(null, 'create', 'missing author field'));
        }
    } catch (e) {
        res.send(response(null, 'create', 'not a json'));
    }
};

exports.getTHEME = function(req, res) {
    var id = req.params.THEMEId;
    console.log(req.params);
    for (var i = 0; i < Number(content.length); i++) {
        if (content[i].id === id) {
            res.send(response(content[i], 'get', null));
            return;
        }
    }
    res.send(response(null, 'get', 'id not found'));
};

exports.updateTHEME = function(req, res) {
    var id = req.params.THEMEId;
    var author = req.body.author;
    console.log(req.params);
    for (var i = 0; i < Number(content.length); i++) {
        if (content[i].id === id) {
            res.send(response(content[i], 'put', 'not implemented :)'));
            return;
        }
    }
    res.send(response(null, 'put', 'id not found'));
};

exports.deleteTHEME = function (req, res) {
    var id = req.params.THEMEId;
    for (var i = 0; i < Number(content.length); i++) {
        if (content[i].id === id) {
            const del = content[i];
            content.splice(i, 1);
            res.send(response(del, 'delete', null));
            return;
        }
    }
    res.send(response(null, 'delete', 'id not found'));
};