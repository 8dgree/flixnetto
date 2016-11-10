define('flixnetto/tests/helpers/resolver', ['exports', 'flixnetto/resolver', 'flixnetto/config/environment'], function (exports, _flixnettoResolver, _flixnettoConfigEnvironment) {

  var resolver = _flixnettoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _flixnettoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _flixnettoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});