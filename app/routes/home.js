import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const movieSearchResults = [];

    return { movieSearchResults };
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
    onSearchMovie(movieTitle) {
      const _this = this;

      Ember.$.getJSON(`https://api.themoviedb.org/3/search/company?api_key=54150846c1fcd55b2da9fd77bc9d3e86&query=${movieTitle}`)
        .then(function(response) {
          Ember.set(_this.currentModel, 'movieSearchResults', response.results);
        });
    }
  }
});
