const _httpResponses = {};

_httpResponses.makeResponseResourceNotFound = (resType, resourceId) => {
    return `404: Resource [${resType}]:id[${resourceId}] not found.`;
};

_httpResponses.makeResponseBadRequest = (errMessage) => {
    return `400: Bad Request. Msg: ${errMessage}`; 
};

module.exports = _httpResponses;