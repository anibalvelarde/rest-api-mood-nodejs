'use strict';

module.exports = (app) => {
    const surveys = require('./controller');

    app.route('/surveys')
        .get(surveys.getAllSurveys())
        .post(surveys.createSurvey);
    
    app.route('/surveys/:surveyId')
        .get(surveys.readSurvey)
        .put(surveys.updateSurvey)
        .delete(surveys.deleteSurvey);
}