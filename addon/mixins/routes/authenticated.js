import Em from 'ember';

export default Em.Mixin.create({
  beforeModel: function(transition) {
    var currentUser = this.currentUser;

    if (!currentUser.get('isLoggedIn')) {
      currentUser.set('transition', transition);
      this.transitionTo('login');
    }
  },

  model: function() {
    return this.currentUser;
  },

  actions: {
    logOut: function() {
      this.currentUser.clear();
      window.location.reload();
    },

    error: function(reason) {
      if (reason.status === 401) {
        this.send('logOut');
      } else {
        return true; // Bubble up the route hierarchy
      }
    }
  }
});
