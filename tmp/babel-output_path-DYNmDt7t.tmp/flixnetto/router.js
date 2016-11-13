define('flixnetto/router', ['exports', 'ember', 'flixnetto/config/environment'], function (exports, _ember, _flixnettoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _flixnettoConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' }, function () {
      this.route('movie-id', { path: '/:id' });
    });
  });

  exports['default'] = Router;
});