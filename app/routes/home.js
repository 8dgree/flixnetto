import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const movieSearchResults = [];
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
    return { movieSearchResults };
  },

  /**
   * Actions this route will take care of.
   */
  actions: {
    onSearchMovie(movieTitle) {
      console.log(movieTitle);
      const _this = this;

      Ember.$.getJSON(`https://api.themoviedb.org/3/search/company?api_key=54150846c1fcd55b2da9fd77bc9d3e86&query=${movieTitle}`)
        .then(function(response) {
          console.log(response);
          Ember.set(_this.currentModel, 'movieSearchResults', response.results);
        });
    }
  }
});
