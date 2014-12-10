import Em from 'ember';
import RouteRequestable from '../route_requestable';

export default Em.Mixin.create(RouteRequestable, {
  authRequestType: 'reset',

  model: function(params) {
    return { password: null, token: params.token };
  },

  onSuccess: function(json) {
    this.currentUser.load(json);
    this.transitionTo('authenticated');
  }
});
