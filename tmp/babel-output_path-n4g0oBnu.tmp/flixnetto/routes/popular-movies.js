define('flixnetto/routes/popular-movies', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var _this = this;
      var popularMoviesResults = [];

      _ember['default'].$.getJSON('https://api.themoviedb.org/3/movie/popular?api_key=54150846c1fcd55b2da9fd77bc9d3e86&language=en-US&page=1').then(function (response) {
        console.log('popularMoviesResults:', response);
        _ember['default'].set(_this.currentModel, 'popularMoviesResults', response.results);
      });
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
      return { popularMoviesResults: popularMoviesResults };
    }
  });
});