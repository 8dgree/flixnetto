import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const movieId = params.id;
    const movieInfo = this.getMovieInfo(movieId);

    return Ember.RSVP.hash({
      movieInfo
    });
  },

  /**
   * Sends a request to API to get movie info.
   * @method getMovies
   * @param  {Number} movieId - Movie ID
   * @return {undefined}
   */
  getMovieInfo(movieId) {
    const _this = this;

    Ember.$.getJSON(`https://api.themoviedb.org/3/movie/${movieId}?api_key=54150846c1fcd55b2da9fd77bc9d3e86&query&language=en-US&append_to_response=undefined`)
      .then(function(response) {
        Ember.set(_this.currentModel, 'movieInfo', response);
      });
  }
});
