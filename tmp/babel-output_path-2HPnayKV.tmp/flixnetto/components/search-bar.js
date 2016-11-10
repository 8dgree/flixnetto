define('flixnetto/components/search-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    /**
     * List of classes for the component.
     */
    classNames: ['search-bar'],

    /**
     * Component's tag name element.
     */
    tagName: 'section',

    /**
     * Defined actions for component.
     */
    actions: {
      /**
       * Gets the search keyword(s) (movie title) provided and bubbles this
       * information up to route for further handling.
       * @method onSearchMovie
       * @param  {String} movieTitle - Movie title
       * @return {undefined}
       */
      onSearchMovie: function onSearchMovie(movieTitle) {
        this.attrs.onSearchMovie(movieTitle);
      }
    }
  });
});