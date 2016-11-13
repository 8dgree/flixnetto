define('flixnetto/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var movieSearchResults = [];
      var movie = {};
      var popularMovies = [];

      this.getPopularMovies(1);

      return _ember['default'].RSVP.hash({
        movieSearchResults: movieSearchResults,
        popularMovies: popularMovies,
        movie: movie
      });
    },

    /**
     * Sends a request to API to get a list of movies based on search keyword(s).
     * @method getMovies
     * @param  {String} movieTitle - Movie title
     * @param  {Number} page       - Selected page (default to 1)
     * @return {undefined}
     */
    getMovies: function getMovies(movieTitle) {
      var page = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

      var _this = this;

      _ember['default'].$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=54150846c1fcd55b2da9fd77bc9d3e86&language=en-US&query=' + movieTitle + '&page=' + page + '&include_adult=undefined&year=undefined&primary_release_year=undefined').then(function (response) {
        _ember['default'].set(_this.currentModel, 'movieSearchResults', response);
      });
    },

    /**
     * Sends a request to API to get relevant list of movies.
     * @method getPopularMovies
     * @param  {Number} page - Selected page
     * @return {undefined}
     */
    getPopularMovies: function getPopularMovies(page) {
      var _this = this;

      _ember['default'].$.getJSON('https://api.themoviedb.org/3/movie/popular?api_key=54150846c1fcd55b2da9fd77bc9d3e86&language=en-US&page=' + page).then(function (response) {
        _ember['default'].set(_this.currentModel, 'popularMovies', response);
      });
    },

    /**
     * Defined actions for route.
     */
    actions: {
      /**
       * Calls "getMovies" method to send a request to API to get a list of
       * relevant movies based on search keyword(s).
       * @method onSearchMovie
       * @param  {String} movieTitle - Movie title
       * @return {undefined}
       */
      onSearchMovie: function onSearchMovie(searchTitle) {
        var controller = this.controllerFor('index');

        searchTitle = searchTitle ? searchTitle : undefined;
        controller.set('isShowPopularMovies', false);
        this.getMovies(searchTitle);
      },

      /**
       * Show popular movies section.
       * @method onBackToPopularMovies
       * @return {undefined}
       */
      onBackToPopularMovies: function onBackToPopularMovies() {
        var controller = this.controllerFor('index');

        controller.set('isShowPopularMovies', true);
      },

      /**
       * Triggered when user made a change to current viewing page. Sends a
       * request to API to get a list of movie based on the page specified.
       * @method onPageChange
       * @param  {String} type         - Type of list (popular/search)
       * @param  {String} title        - Movie title
       * @param  {Number} selectedPage - Selected page
       * @param  {Number} lastPage     - Last page of results
       * @return {undefined}
       */
      onPageChange: function onPageChange(type, title, selectedPage, lastPage) {
        if (type === 'search') {
          if (selectedPage >= lastPage) {
            this.getMovies(title, lastPage);
          } else if (selectedPage < 1) {
            this.getMovies(title, 1);
          } else {
            this.getMovies(title, selectedPage);
          }
        } else if (type === 'popular') {
          if (selectedPage >= lastPage) {
            this.getPopularMovies(lastPage);
          } else if (selectedPage < 1) {
            this.getPopularMovies(1);
          } else {
            this.getPopularMovies(selectedPage);
          }
        }
      },

      /**
       * Triggered when user clicked on "<" button.
       * @method onSelectPreviousPage
       * @param  {String} type         - Type of list (popular/search)
       * @param  {String} title        - Movie title
       * @param  {Number} currentPage - Current page
       * @param  {Number} lastPage    - Last page of results
       * @return {undefined}
       */
      onSelectPreviousPage: function onSelectPreviousPage(type, title, currentPage, lastPage) {
        if (type === 'search') {
          if (currentPage >= lastPage) {
            this.getMovies(title, lastPage);
          } else if (currentPage < 1) {
            this.getMovies(title, 1);
          } else {
            this.getMovies(title, currentPage - 1);
          }
        } else if (type === 'popular') {
          if (currentPage >= lastPage) {
            this.getPopularMovies(lastPage);
          } else if (currentPage < 1) {
            this.getPopularMovies(1);
          } else {
            this.getPopularMovies(currentPage - 1);
          }
        }
      },

      /**
       * Triggered when user clicked on ">" button.
       * @method onSelectNextPage
       * @param  {String} type         - Type of list (popular/search)
       * @param  {String} title        - Movie title
       * @param  {Number} currentPage - Current page
       * @param  {Number} lastPage    - Last page of results
       * @return {undefined}
       */
      onSelectNextPage: function onSelectNextPage(type, title, currentPage, lastPage) {
        if (type === 'search') {
          if (currentPage >= lastPage) {
            this.getMovies(title, lastPage);
          } else if (currentPage < 1) {
            this.getMovies(title, 1);
          } else {
            this.getMovies(title, currentPage + 1);
          }
        } else if (type === 'popular') {
          if (currentPage >= lastPage) {
            this.getPopularMovies(lastPage);
          } else if (currentPage < 1) {
            this.getPopularMovies(1);
          } else {
            this.getPopularMovies(currentPage + 1);
          }
        }
      }
    }
  });
});