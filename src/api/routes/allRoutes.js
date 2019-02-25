'use strict';

module.exports = (app) => {
    // load routes for Surveys resource
    const surveyRoutes = require('./surveyRoutes');
    surveyRoutes(app);
};