define('flixnetto/components/movie-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    /**
     * List of classes for the component.
     */
    classNames: ['movie-list'],

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
    sortOptions: [{ label: 'Title (A-Z)', property: 'title:asc' }, { label: 'Highest ratings', property: 'vote_average:desc' }, { label: 'Latest Released Date', property: 'release_date:desc' }],

    /**
     * Computed property that listens to the items array and sorts the elements in
     * the item array according sortSelected.
     * @type {Array}
     */
    sortedMovies: _ember['default'].computed.sort('movies.results', 'sortSelected'),

    /**
     * Indicates if previous page button should be disabled.
     * @type {Boolean}
     */
    isDisablePreviousPage: _ember['default'].computed.lte('movies.page', 1),

    /**
     * Indicates if next page button should be disabled.
     * @type {Boolean}
     */
    isDisableNextPage: _ember['default'].computed('movies.page', 'movies.total_pages', function () {
      var currentPage = this.get('movies.page');
      var lastPage = this.get('movies.total_pages');

      return currentPage >= lastPage;
    }),

    /**
     * Defined actions for component.
     */
    actions: {
      /**
       * Gets user selected page and bubbles up action to route for further
       * handling.
       * @method onPageChange
       * @param  {String} type         - Type of list (popular/search)
       * @param  {String} title        - Movie title
       * @param  {Number} selectedPage - User specified page
       * @param  {Number} lastPage     - Last page of results
       * @return {undefined}
       */
      onPageChange: function onPageChange(type, title, selectedPage, lastPage) {
        this.attrs.onPageChange(type, title, selectedPage, lastPage);
      },

      /**
       * Gets current page and bubbles action up to route for further handling.
       * @method onSelectPreviousPage
       * @param  {String} type        - Type of list (popular/search)
       * @param  {String} title       - Movie title
       * @param  {Number} currentPage - Current page
       * @param  {Number} lastPage    - Last page of results
       * @return {undefined}
       */
      onSelectPreviousPage: function onSelectPreviousPage(type, title, currentPage, lastPage) {
        this.attrs.onSelectPreviousPage(type, title, currentPage, lastPage);
      },

      /**
       * Gets current page and bubbles action up to route for further handling.
       * @method onSelectNextPage
       * @param  {String} type        - Type of list (popular/search)
       * @param  {String} title       - Movie title
       * @param  {Number} currentPage - Current page
       * @param  {Number} lastPage    - Last page of results
       * @return {undefined}
       */
      onSelectNextPage: function onSelectNextPage(type, title, currentPage, lastPage) {
        this.attrs.onSelectNextPage(type, title, currentPage, lastPage);
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
      },

      /**
       * Redirects user back to popular movies section.
       * @method onBackToPopularMovies
       * @return {undefined}
       */
      onBackToPopularMovies: function onBackToPopularMovies() {
        this.attrs.onBackToPopularMovies();
      }
    }
  });
});