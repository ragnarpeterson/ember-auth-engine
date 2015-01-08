# ember-auth-engine

A simple auth addon for your Ember app.

## Installation

```bash
# From within your ember-cli project
ember install:addon ember-auth-engine
```

## Usage

You need to do two things to be able to use ember-auth-engine in your app. First, you need to set a few configuration options in your application's `config/environment.js` file:

```javascript
ENV['ember-auth-engine'] = {
  host: 'https://api.example.com',
  authenticatedRoot: 'items'
};
```

At a bare minimum, you will need to set `host` and `authenticatedRoot`. However, most applications will likely need to specify a few other things. See [here](https://github.com/jasonkriss/ember-auth-engine/blob/master/config/environment.js) for all available configuration options.

The second required step is to mount the engine in your application's `app/router.js` file::

```javascript
import Em from 'ember';
import config from './config/environment';
import { mount as mountAuth } from 'ember-auth-engine';

var Router = Em.Router.extend({
  location: config.locationType
});

Router.map(function() {
  mountAuth(this, function() {
    this.resource('someresourcerequiringauth');
    this.resource('anotherresourcerequiringauth');
  });
});

export default Router;
```

Once these two steps are done, your app will be rewarded with the following:

* all the auth routes your app needs (login, forgotten password, etc)
* a `currentUser` object available on all routes, controllers, and components
* much, much more
