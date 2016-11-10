define('flixnetto/routes/popular-movies', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var popularMovie = {};
      var popularMovies = [];

      this.getPopularMovies(1);

      return {
        popularMovies: popularMovies,
        popularMovie: popularMovie
      };
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
     * Round user ratings to the nearest integer.
     * @method configData
     * @param  {Object} popularMovie - Selected movie
     * @return {undefined}
     */
    formatRatings: function formatRatings(popularMovie) {
      return Math.round(popularMovie.vote_average);
    },

    /**
     * Defined actions for route.
     */
    actions: {
      /**
       * Display details for selected movie.
       * @method onViewMovieDetails
       * @param  {Object} popularMovie - Selected movie
       * @return {undefined}
       */
      onViewMovieDetails: function onViewMovieDetails(popularMovie) {
        if (popularMovie) {
          popularMovie.vote_average = this.formatRatings(popularMovie);
          _ember['default'].set(this.currentModel, 'popularMovie', popularMovie);
        }
      },

      /**
       * Triggered when user made a change to current viewing page. Sends a
       * request to API to get a list of movie based on the page specified.
       * @method onPageChange
       * @param  {Number} selectedPage - Selected page
       * @return {undefined}
       */
      onPageChange: function onPageChange(selectedPage) {
        var lastPage = this.currentModel.popularMovies.total_pages;

        if (selectedPage >= lastPage) {
          this.getPopularMovies(lastPage);
        } else if (selectedPage < 1) {
          this.getPopularMovies(1);
        } else {
          this.getPopularMovies(selectedPage);
        }
      },

      /**
       * Triggered when user clicked on "<" button.
       * @method onSelectPreviousPage
       * @param  {Number} currentPage - Current page
       * @return {undefined}
       */
      onSelectPreviousPage: function onSelectPreviousPage(currentPage) {
        var lastPage = this.currentModel.popularMovies.total_pages;

        if (currentPage >= lastPage) {
          this.getPopularMovies(lastPage);
        } else if (currentPage < 1) {
          this.getPopularMovies(1);
        } else {
          this.getPopularMovies(currentPage - 1);
        }
      },

      /**
       * Triggered when user clicked on ">" button.
       * @method onSelectNextPage
       * @param  {Number} currentPage - Current page
       * @return {undefined}
       */
      onSelectNextPage: function onSelectNextPage(currentPage) {
        var lastPage = this.currentModel.popularMovies.total_pages;

        if (currentPage >= lastPage) {
          this.getPopularMovies(lastPage);
        } else if (currentPage < 1) {
          this.getPopularMovies(1);
        } else {
          this.getPopularMovies(currentPage + 1);
        }
      }
    }
  });
});