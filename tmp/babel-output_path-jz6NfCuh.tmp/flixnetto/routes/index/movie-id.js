define('flixnetto/routes/index/movie-id', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      var movieId = params.id;
      var movieInfo = this.getMovieInfo(movieId);
      var similarMovies = this.getSimilarMovies(movieId);

      return _ember['default'].RSVP.hash({
        movieInfo: movieInfo,
        similarMovies: similarMovies
      });
    },

    /**
     * Sends a request to API to get movie info.
     * @method getMovies
     * @param  {Number} movieId - Movie ID
     * @return {undefined}
     */
    getMovieInfo: function getMovieInfo(movieId) {
      var _this = this;

      _ember['default'].$.getJSON('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=54150846c1fcd55b2da9fd77bc9d3e86&query&language=en-US&append_to_response=undefined').then(function (response) {
        _ember['default'].set(_this.currentModel, 'movieInfo', response);
      });
    },

    /**
     * Sends a request to API to get similar  movies.
     * @method getSimilarMovies
     * @param  {Number} id - Movie id
     * @return {undefined}
     */
    getSimilarMovies: function getSimilarMovies(id) {
      var _this = this;

      _ember['default'].$.getJSON('https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=54150846c1fcd55b2da9fd77bc9d3e86&language=en-US&page=1').then(function (response) {
        console.log("similarMovies:", response);
        _ember['default'].set(_this.currentModel, 'similarMovies', response.results);
      });
    }
  });
});