// GET /Line/{ids}/Status
// https://api.tfl.gov.uk/Line/{id}/Status
import _ from 'lodash';
import { API } from '../../../config';

module.exports = async (line) => {
  const response = await fetch(`${API}/Line/${line}/Status?detail=true`);
  const body = await response.json();

  return {
    status: _.get(body, '[0].lineStatuses[0].statusSeverityDescription', 'Unknown'),
    severity: _.get(body, '[0].lineStatuses[0].statusSeverity', 'Unknown'),
  };
};

