const _ = require('lodash');
const { API } = require('../../../config');

// GET /Line/{ids}/Status
// https://api.tfl.gov.uk/Line/{id}/Status
module.exports = async (line) => {
  const response = await fetch(`${API}/Line/${line}/Status?detail=true`);
  const body = await response.json();

  return {
    status: _.get(body, '[0].lineStatuses[0].statusSeverityDescription', 'Unknown'),
    severity: _.get(body, '[0].lineStatuses[0].statusSeverity', 'Unknown'),
  };
};

