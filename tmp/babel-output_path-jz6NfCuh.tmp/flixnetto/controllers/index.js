define('flixnetto/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    /**
     * Show/hide popular movies section.
     * @type {Boolean}
     */
    isShowPopularMovies: true
  });
});