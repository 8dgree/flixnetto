define('flixnetto/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'flixnetto/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _flixnettoConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_flixnettoConfigEnvironment['default'].APP.name, _flixnettoConfigEnvironment['default'].APP.version)
  };
});