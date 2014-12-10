export default {
  name: 'currentUser',
  after: 'store',

  initialize: function(container, app) {
    container.injection('user:current', 'store', 'store:main');
    container.typeInjection('route', 'currentUser', 'user:current');
    container.typeInjection('controller', 'currentUser', 'user:current');
    container.typeInjection('component', 'currentUser', 'user:current');

    var currentUser = container.lookup('user:current');

    if (currentUser.get('isLoggedIn')) {
      app.deferReadiness();
      currentUser.fetch().then(function() { app.advanceReadiness(); });
    }
  }
};
