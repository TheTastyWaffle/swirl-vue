'use strict';

module.exports = function (app) {
    const THEME = require('../controllers/THEME');

    //all THEME api routes
    app.route('/THEME')
        .get(THEME.getAllTHEME)
        .post(THEME.createTHEME);

    app.route('/THEME/:THEMEId')
        .get(THEME.getTHEME)
        .put(THEME.updateTHEME)
        .delete(THEME.deleteTHEME);
};