define('flixnetto/components/popular-movies/popular-movie-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    /**
     * List of classes for the component.
     */
    classNames: ['popular-movie-list'],

    /**
     * Component's tag name element.
     */
    tagName: 'section',

    /**
     * Determines the desired sort option by the user, by default sorts by title.
     * @type {String}
     */
    sortSelected: ['title:asc'],

    /**
     * Hash map containing sorting options.
     * @type {Array}
     */
    sortOptions: [{ label: 'Title', property: 'title:asc' }, { label: 'Ratings', property: 'vote_average:desc' }, { label: 'Released Date', property: 'release_date:desc' }],

    /**
     * Computed property that listens to the items array and sorts the elements in
     * the item array according sortSelected.
     * @type {Array}
     */
    sortedPopularMovies: _ember['default'].computed.sort('popularMovies.results', 'sortSelected'),

    /**
     * Indicates if previous page button should be disabled.
     * @type {Boolean}
     */
    isDisablePreviousPage: _ember['default'].computed.lte('popularMovies.page', 1),

    /**
     * Indicates if next page button should be disabled.
     * @type {Boolean}
     */
    isDisableNextPage: _ember['default'].computed.gte('popularMovies.page', 'popularMovies.total_pages'),

    /**
     * Defined actions for component.
     */
    actions: {
      /**
       * Gets user selected page and bubbles up action to route for further
       * handling.
       * @method onPageChange
       * @param  {Number} selectedPage - User specified page
       * @return {undefined}
       */
      onPageChange: function onPageChange(selectedPage) {
        this.attrs.onPageChange(selectedPage);
      },

      /**
       * Gets current page and bubbles action up to route for further handling.
       * @method onSelectPreviousPage
       * @param  {Number} currentPage - Current page
       * @return {undefined}
       */
      onSelectPreviousPage: function onSelectPreviousPage(currentPage) {
        this.attrs.onSelectPreviousPage(currentPage);
      },

      /**
       * Gets current page and bubbles action up to route for further handling.
       * @method onSelectNextPage
       * @param  {Number} currentPage - Current page
       * @return {undefined}
       */
      onSelectNextPage: function onSelectNextPage(currentPage) {
        this.attrs.onSelectNextPage(currentPage);
      },

      /**
       * Sets the sort value according to user selection.
       * @method onSelectSort
       * @param  {String} sortProperty - Selected value by the user
       * @return {undefined}
       */
      onSelectSort: function onSelectSort(sortProperty) {
        this.set('sortSelected', [sortProperty]);
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