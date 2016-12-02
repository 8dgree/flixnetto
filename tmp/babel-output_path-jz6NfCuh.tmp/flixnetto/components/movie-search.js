define('flixnetto/components/movie-search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
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
      onSearchMovie: function onSearchMovie(movieTitle) {
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
      onViewMovieDetails: function onViewMovieDetails(popularMovie) {
        this.attrs.onViewMovieDetails(popularMovie);
      }
    }
  });
});