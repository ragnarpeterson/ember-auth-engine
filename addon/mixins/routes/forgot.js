import Em from 'ember';
import RouteRequestable from '../route_requestable';

export default Em.Mixin.create(RouteRequestable, {
  authRequestType: 'forgot',

  model: function() {
    return { email: null };
  },

  onSuccess: function(json) {
    this.transitionTo('login');
  }
});
