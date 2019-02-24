const _surveys = {};

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
        }
    },
    [3456]: {
        ["q1"]: {
            text: "Do you live in Alaska?",
            answerType: "boolean"
        },
        ["q2"]: {
            text: "What is your top choice of snowmobile/snowmachine?",
            answerType: "string"
        }
    }
}

module.exports = _surveys;