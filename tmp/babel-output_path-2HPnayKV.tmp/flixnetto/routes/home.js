define('flixnetto/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var movieSearchResults = [];

      return { movieSearchResults: movieSearchResults };
    },

    /**
     * Defined actions for route.
     */
    actions: {
      /**
       * Sends a request to API to get a list of relevant movies based on search
       * keyword(s).
       * @method onSearchMovie
       * @param  {String} movieTitle - Movie title
       * @return {undefined}
       */
      onSearchMovie: function onSearchMovie(movieTitle) {
        var _this = this;

        _ember['default'].$.getJSON('https://api.themoviedb.org/3/search/company?api_key=54150846c1fcd55b2da9fd77bc9d3e86&query=' + movieTitle).then(function (response) {
          _ember['default'].set(_this.currentModel, 'movieSearchResults', response.results);
        });
      }
    }
  });
});