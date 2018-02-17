'use strict';

module.exports = function (app) {
    var THEME = require('../controllers/THEME');

    app.route('/THEME')
        .get(THEME.getAllTHEME)
        .post(THEME.createTHEME);

    app.route('/THEME/:THEMEId')
        .get(THEME.getTHEME)
        .put(THEME.updateTHEME)
        .delete(THEME.deleteTHEME);
};