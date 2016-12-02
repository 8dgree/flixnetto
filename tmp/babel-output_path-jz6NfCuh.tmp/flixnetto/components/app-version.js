define('flixnetto/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'flixnetto/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _flixnettoConfigEnvironment) {

  var name = _flixnettoConfigEnvironment['default'].APP.name;
  var version = _flixnettoConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});