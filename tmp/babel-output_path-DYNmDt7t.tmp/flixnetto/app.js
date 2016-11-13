define('flixnetto/app', ['exports', 'ember', 'flixnetto/resolver', 'ember-load-initializers', 'flixnetto/config/environment'], function (exports, _ember, _flixnettoResolver, _emberLoadInitializers, _flixnettoConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _flixnettoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _flixnettoConfigEnvironment['default'].podModulePrefix,
    Resolver: _flixnettoResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _flixnettoConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});