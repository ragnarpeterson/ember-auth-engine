import Em from 'ember';

export default Em.Mixin.create({
  beforeModel: function() {
    var config = this.container.lookupFactory('config:environment');
    this.transitionTo(config['ember-auth-engine'].authenticatedRoot);
  }
});
