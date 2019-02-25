const guid = require('../utilities/guid');
let _surveys = {};

_surveys = {
    [1234]: {
        ["q1"]: {
            text: "Do you like icecream?",
            answerType: "boolean"
        },
        ownerId: 900001
    },
    [5678]: {
        ["q1"]: {
            text: "What is your top choice of computer language?",
            answerType: "string"
        },
        ownerId: 900002
    },
    [3456]: {
        ["q1"]: {
            text: "Do you live in Alaska?",
            answerType: "boolean"
        },
        ["q2"]: {
            text: "What is your top choice of snowmobile/snowmachine?",
            answerType: "string"
        },
        ownerId: 900003
    }
};

_surveys.isValid = (data) => {
    const keys = Object.keys(data);
    const badQuestion = keys.find((key) => {
            return !data[key];
        });
    return !badQuestion && keys.includes('ownerId');
};

_surveys.makeNewSurvey = (data) => {
    if (_surveys.isValid(data)) {
        const id = guid.makeNewGuid();
        return {
            [id]: data
        };
    }
};

_surveys.persist = (data) => {
    console.log('TODO: need to implement this operation');
};

module.exports = _surveys;