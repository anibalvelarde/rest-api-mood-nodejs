# Domain Analysis for Mood Check API
This document contains documentation and artifacts related to the analysis of the domain for creating quick mood-check surveys that can be created in real-time and recieve the "mood" of the intended audience in real-time also.

## Basic Domain Concepts
### Survey
This is a topic to be researched. Each survey is crated by a Surveyor. A survey has
- a globally unique identifier
- owned by a single Surveyor
- a description (250 characters max)
- a a creation date
- at least one question (up to a max of 5 questions per survey). 

### Question
A question is a string of text up to 140 characters.
The question will require an answer. 

### Response / Answer
The user of the system who answers a question would be considered as a single response.  A user of the system cannot supply more than 1 response per question.  The response cannot be changed by the user.  The data type of the response will depend on the data type defined by the question.
Said answer can be 
  - a simple yes/no
  - an integer positive number
  - a real number
  - a string (140 characthers max)
  - an integer between x & y where,
    - x < y
    - x >= 0
    - a real number bewteen 0 and 100

### Pollster / Surveyor
This is the person who creates a survey. At this time, I think this user cannot be anonymous. This system should provide a way to trust ID Providers such as Facebook, Twitter, Gab, etc.

### Participant
This is the person (system user) who responds to a survey. For now, this API only supports anonymous participants. 
This presents the problem of how to uniquely identify a participant and restrict the number of answers they may give to a question in a survey to be 1 and only 1 answer.