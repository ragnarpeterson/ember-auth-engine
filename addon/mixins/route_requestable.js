import Em from 'ember';
import Requestable from './requestable';

export default Em.Mixin.create(Requestable, {
  authRequestType: null,

  onSuccess: function(json) {
    return json;
  },

  onFailure: function(reason) {
    throw reason;
  },

  actions: {
    submit: function() {
      var type = this.authRequestType,
          params = this.currentModel,
          success = this.onSuccess.bind(this),
          failure = this.onFailure.bind(this);

      return this.authRequest(type, params).then(success, failure);
    }
  }
});
