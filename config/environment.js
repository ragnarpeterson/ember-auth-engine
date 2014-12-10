'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    'ember-auth-engine': {
      modelType: 'user',

      authenticatedRoot: null,

      host: null,

      registerPath: 'user',
      loginPath: 'user/login',
      fetchPath: 'user',
      forgotPath: 'user/forgot',
      resetPath: 'user/reset',

      registerMethod: 'POST',
      loginMethod: 'POST',
      fetchMethod: 'GET',
      forgotMethod: 'POST',
      resetMethod: 'POST'
    }
  };
};
