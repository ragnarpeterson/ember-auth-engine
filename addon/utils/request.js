import icRequest from 'ic-ajax';

var CONTENT_TYPE = 'application/json; charset=utf-8',
    DATA_TYPE = 'json';

export default function request(method, url, params) {
  var options = { url: url, type: method, dataType: DATA_TYPE, data: params };

  if (params && method !== 'GET') {
    options.data = JSON.stringify(params);
    options.contentType = CONTENT_TYPE;
  }

  return icRequest(options).then(function(response) {
    return response;
  }, function(reason) {
    throw reason.jqXHR;
  });
}
