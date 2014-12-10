import Em from 'ember';
import RouteRequestable from '../route_requestable';

export default Em.Mixin.create(RouteRequestable, {
  authRequestType: 'register',

  model: function() {
    return {
      name: null,
      email: null,
      password: null
    };
  },

  onSuccess: function(json) {
    this.currentUser.load(json);
    this.transitionTo('authenticated');
  }
});
