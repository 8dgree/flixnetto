define('flixnetto/router', ['exports', 'ember', 'flixnetto/config/environment'], function (exports, _ember, _flixnettoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _flixnettoConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('home', { path: '/' });
    this.route('popular-movies', { path: '/popular-movies' });
  });

  exports['default'] = Router;
});