const guidv1 = require('uuid/v1');

const _guid = {};
_guid.makeNewGuid = () => guidv1();

module.exports = _guid;