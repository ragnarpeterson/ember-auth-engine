import Em from 'ember';
import RouteRequestable from '../route_requestable';

export default Em.Mixin.create(RouteRequestable, {
  authRequestType: 'login',

  model: function() {
    return { email: null, password: null };
  },

  onSuccess: function(json) {
    var transition = this.currentUser.get('transition');

    this.currentUser.load(json);
    this.currentUser.set('transition', null);

    if (transition) { transition.retry(); }
    else { this.transitionTo('authenticated'); }
  }
});
