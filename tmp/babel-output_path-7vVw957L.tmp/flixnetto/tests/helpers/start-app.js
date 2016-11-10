define('flixnetto/tests/helpers/start-app', ['exports', 'ember', 'flixnetto/app', 'flixnetto/config/environment'], function (exports, _ember, _flixnettoApp, _flixnettoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _flixnettoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _flixnettoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});