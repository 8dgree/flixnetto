define('flixnetto/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var movieSearchResults = [];
      // return Ember.$.getJSON('/items.json');
      // return Ember.$.getJSON('http://www.omdbapi.com/?s=' + query['s'])
      //   .then(function(result) {
      //     if (result.hasOwnProperty('Search')) {
      //       return result.Search.map(function(c) {
      //         return {
      //           id: c.imdbID,
      //           title: c.Title,
      //           year: c.Year,
      //           type: c.Type
      //         };
      //     });
      //     } else {
      //       return [];
      //     }
      //   });
      return { movieSearchResults: movieSearchResults };
    },

    /**
     * Actions this route will take care of.
     */
    actions: {
      onSearchMovie: function onSearchMovie(movieTitle) {
        console.log(movieTitle);
        var _this = this;

        _ember['default'].$.getJSON('https://api.themoviedb.org/3/search/company?api_key=54150846c1fcd55b2da9fd77bc9d3e86&query=' + movieTitle).then(function (response) {
          console.log(response);
          _ember['default'].set(_this.currentModel, 'movieSearchResults', response.results);
        });
      }
    }
  });
});