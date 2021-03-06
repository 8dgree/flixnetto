import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * List of classes for the component.
   */
  classNames: ['movie-search'],

  /**
   * Component's tag name element.
   */
  tagName: 'section',

  /**
   * Search title.
   * @type {String}
   */
  searchTitle: '',

  /**
   * Defined actions for component.
   */
  actions: {
    /**
     * Gets search keyword(s). Bubbles action up to route for further handling.
     * @method onSearchMovie
     * @param  {String} movieTitle - Movie title
     * @return {undefined}
     */
    onSearchMovie(movieTitle) {
      this.set('searchTitle', movieTitle);
      this.attrs.onSearchMovie(movieTitle);
    },

    /**
     * Gets currently selected movie. Bubbles action up to route for further
     * handling.
     * @method onViewMovieDetails
     * @param  {Object} popularMovie - Selected movie
     * @return {undefined}
     */
    onViewMovieDetails(popularMovie) {
      this.attrs.onViewMovieDetails(popularMovie);
    }
  }
});
