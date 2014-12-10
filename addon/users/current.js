import Em from 'ember';
import Requestable from '../mixins/requestable';

export default Em.ObjectProxy.extend(Requestable, {
  transition: null,
  apiKey: null,
  isLoggedIn: Em.computed.bool('apiKey'),

  init: function() {
    var apiKey = localStorage.getItem('apiKey');
    if (apiKey) { this.setApiKey(apiKey); }
  },

  fetch: function() {
    var success = this.load.bind(this),
        failure = this.clear.bind(this);

    return this.authRequest('fetch').then(success, failure);
  },

  load: function(json) {
    var user = this.pushRaw(json.user);
    this.set('content', user);
    this.setApiKey(user.get('apiKey'));
    return user;
  },

  setApiKey: function(key) {
    this.set('apiKey', key);
    localStorage.setItem('apiKey', key);
    Em.$.ajaxSetup({ headers: { Authorization: 'Token token="%@"'.fmt(key) } });
  },

  pushRaw: function(raw) {
    var type = this.config.modelType,
        store = this.store;

    return store.push(type, store.normalize(type, raw));
  },

  clear: function() {
    localStorage.clear();
    this.set('apiKey', null);
  }
});
