define('flixnetto/router', ['exports', 'ember', 'flixnetto/config/environment'], function (exports, _ember, _flixnettoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _flixnettoConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('home', { path: '/' });
    this.route('popular-movies', { path: '/popular-movies' });
    // this.route('popular-movies', function() {
    //   this.route('test-id', { path: '/:id' }, function() {
    //     this.route('setup');
    //     this.route('iterations', function() {
    //       this.route('index', { path: '/' });
    //       this.route('iteration-id', { path: '/:iterationId' }, function() {
    //         this.route('index', { path: '/' });
    //         this.route('setup');
    //         this.route('results-overview');
    //         this.route('data-deep-dive');
    //         this.route('export-custom-report');
    //       });
    //     });
    //     this.route('test-history');
    //     this.route('on-demand');
    //   });
    //   this.route('create', function() {
    //     this.route('basic-info');
    //   });
    // });
  });

  exports['default'] = Router;
});