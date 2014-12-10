import Em from 'ember';

export default Ember.Mixin.create({
  beforeModel: function() {
    if (this.currentUser.get('isLoggedIn')) {
      this.transitionTo('authenticated');
    }
  }
});
