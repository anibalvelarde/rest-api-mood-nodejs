'use strict'; 
const resources = require('../constants');
const Surveys = require('./model');
const uuidGen = require('uuid/v1');
const httpResp = require('../utilities/httpErrors');

exports.getAllSurveys = (req, res) => {
    console.log(req);
    if(!Surveys)
        res.json({});
    res.json(Surveys);
};

exports.createSurvey = (req, res) => {
    const uuid = uuidGen();
    if (!Surveys.isValid(req.body)) 
        res
            .status(400)
            .end(httpResp.makeResponseBadRequest('Data for Survey is not valid.'));
    
    const newSurvey = Surveys.makeNewSurvey(req.body);
    Surveys.persist(newSurvey);
    res.json(newSurvey);
};

exports.readSurvey = (req, res) => {
    const survey = Surveys[req.params.surveyId];

    if (!survey) 
        res
            .status(404)
            .send(httpResp.makeResponseResourceNotFound(resources.SURVEYS, req.params.surveyId))
            .end();
    res.json(survey); 
};

exports.updateSurvey = (req, res) => {
    const survey = Surveys[req.params.surveyId];
    if (!survey)
        res
            .status(404)
            .send(httpResp.makeResponseResourceNotFound(resources.SURVEYS, req.params.surveyId))
            .end();
    
    const updatedSurvey = updateSurvey(req.body, survey);
    Surveys.persist(updatedSurvey);
    res.json(updatedSurvey);
};

exports.deleteSurvey = (req, res) => {
    const survey = Surveys[req.params.surveyId];
    if (!survey)
        res.send(httpResp.makeResponseResourceNotFound(resources.SURVEYS, req.params.surveyId));
    // deleteSurvey(req.params.surveyId)
};
