import Em from 'ember';
import request from '../utils/request';

export default Em.Mixin.create({
  authUrlFor: function(endpoint) {
    return this.config.host + '/' + this.config[endpoint + 'Path'];
  },

  authMethodFor: function(endpoint) {
    return this.config[endpoint + 'Method'];
  },

  authRequest: function(endpoint, params) {
    var url = this.authUrlFor(endpoint),
        method = this.authMethodFor(endpoint);

    return request(method, url, params);
  },

  _setConfig: function() {
    this.config = this.container.lookupFactory('config:environment')['ember-auth-engine'];
  }.on('init')
});
