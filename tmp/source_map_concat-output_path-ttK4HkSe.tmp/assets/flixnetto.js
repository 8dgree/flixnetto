"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('flixnetto/app', ['exports', 'ember', 'flixnetto/resolver', 'ember-load-initializers', 'flixnetto/config/environment'], function (exports, _ember, _flixnettoResolver, _emberLoadInitializers, _flixnettoConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _flixnettoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _flixnettoConfigEnvironment['default'].podModulePrefix,
    Resolver: _flixnettoResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _flixnettoConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('flixnetto/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'flixnetto/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _flixnettoConfigEnvironment) {

  var name = _flixnettoConfigEnvironment['default'].APP.name;
  var version = _flixnettoConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
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
define('flixnetto/components/popular-movies', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    /**
     * List of classes for the component.
     */
    classNames: ['popular-movies'],

    /**
     * Component's tag name element.
     */
    tagName: 'section'
  });
});
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
       * Gets the search keyword(s) provided and bubbles this information up to
       * "index" route for further handling.
       * @method onSearchMovie
       * @param  {String} searchTitle - Search title
       * @return {undefined}
       */
      onSearchMovie: function onSearchMovie(searchTitle) {
        this.attrs.onSearchMovie(searchTitle);
      }
    }
  });
});
define('flixnetto/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    /**
     * Show/hide popular movies section.
     * @type {Boolean}
     */
    isShowPopularMovies: true
  });
});
define('flixnetto/helpers/eq', ['exports', 'ember'], function (exports, _ember) {
  exports.eq = eq;

  function eq(params) {
    return params[0] === params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(eq);
});
define('flixnetto/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('flixnetto/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _emberRouteActionHelperHelpersRouteAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteActionHelperHelpersRouteAction['default'];
    }
  });
});
define('flixnetto/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('flixnetto/helpers/string-truncate', ['exports', 'ember'], function (exports, _ember) {
  exports.stringTruncate = stringTruncate;

  function stringTruncate(_, _ref) {
    var _ref$content = _ref.content;
    var content = _ref$content === undefined ? '' : _ref$content;
    var _ref$maxLength = _ref.maxLength;
    var maxLength = _ref$maxLength === undefined ? 20 : _ref$maxLength;
    var _ref$suffix = _ref.suffix;
    var suffix = _ref$suffix === undefined ? '...' : _ref$suffix;

    var length = content.length;

    if (length > maxLength) {
      return content.substr(0, maxLength) + suffix;
    } else {
      return content;
    }
  }

  exports['default'] = _ember['default'].Helper.helper(stringTruncate);
});
define('flixnetto/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'flixnetto/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _flixnettoConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_flixnettoConfigEnvironment['default'].APP.name, _flixnettoConfigEnvironment['default'].APP.version)
  };
});
define('flixnetto/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('flixnetto/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('flixnetto/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('flixnetto/initializers/export-application-global', ['exports', 'ember', 'flixnetto/config/environment'], function (exports, _ember, _flixnettoConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_flixnettoConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _flixnettoConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_flixnettoConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('flixnetto/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('flixnetto/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('flixnetto/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("flixnetto/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('flixnetto/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('flixnetto/router', ['exports', 'ember', 'flixnetto/config/environment'], function (exports, _ember, _flixnettoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _flixnettoConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' }, function () {
      this.route('movie-id', { path: '/:id' });
    });
  });

  exports['default'] = Router;
});
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
define('flixnetto/routes/index/movie-id', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      var movieId = params.id;
      var movieInfo = this.getMovieInfo(movieId);

      return _ember['default'].RSVP.hash({
        movieInfo: movieInfo
      });
    },

    /**
     * Sends a request to API to get movie info.
     * @method getMovies
     * @param  {Number} movieId - Movie ID
     * @return {undefined}
     */
    getMovieInfo: function getMovieInfo(movieId) {
      var _this = this;

      _ember['default'].$.getJSON('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=54150846c1fcd55b2da9fd77bc9d3e86&query&language=en-US&append_to_response=undefined').then(function (response) {
        _ember['default'].set(_this.currentModel, 'movieInfo', response);
      });
    }
  });
});
define('flixnetto/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("flixnetto/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "flixnetto/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          dom.setAttribute(el1, "id", "app-name");
          var el2 = dom.createTextNode("Flixnetto");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "link-to", ["index", ["get", "movie.id", ["loc", [null, [1, 19], [1, 27]]]]], ["class", "lnk-home"], 0, null, ["loc", [null, [1, 0], [3, 12]]]], ["content", "outlet", ["loc", [null, [5, 0], [5, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("flixnetto/templates/components/movie-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 8
              },
              "end": {
                "line": 28,
                "column": 8
              }
            },
            "moduleName": "flixnetto/templates/components/movie-list.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element2, 'value');
            morphs[1] = dom.createMorphAt(element2, 0, 0);
            return morphs;
          },
          statements: [["attribute", "value", ["get", "sortOption.property", ["loc", [null, [27, 26], [27, 45]]]]], ["content", "sortOption.label", ["loc", [null, [27, 48], [27, 68]]]]],
          locals: ["sortOption"],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 40,
                    "column": 14
                  },
                  "end": {
                    "line": 42,
                    "column": 14
                  }
                },
                "moduleName": "flixnetto/templates/components/movie-list.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "string-truncate", [], ["content", ["subexpr", "@mut", [["get", "movie.overview", ["loc", [null, [41, 42], [41, 56]]]]], [], []], "maxLength", 100, "suffix", "..."], ["loc", [null, [41, 16], [41, 85]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 42,
                    "column": 14
                  },
                  "end": {
                    "line": 44,
                    "column": 14
                  }
                },
                "moduleName": "flixnetto/templates/components/movie-list.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                No description available\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 36,
                  "column": 8
                },
                "end": {
                  "line": 47,
                  "column": 8
                }
              },
              "moduleName": "flixnetto/templates/components/movie-list.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "movie-info");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h3");
              dom.setAttribute(el2, "class", "title");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("p");
              dom.setAttribute(el2, "class", "overview");
              var el3 = dom.createTextNode("\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("            ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
              morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
              return morphs;
            },
            statements: [["content", "movie.title", ["loc", [null, [38, 30], [38, 45]]]], ["block", "if", [["get", "movie.overview", ["loc", [null, [40, 20], [40, 34]]]]], [], 0, 1, ["loc", [null, [40, 14], [44, 21]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 34,
                "column": 4
              },
              "end": {
                "line": 49,
                "column": 4
              }
            },
            "moduleName": "flixnetto/templates/components/movie-list.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "movie");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "link-to", ["index.movie-id", ["get", "movie.id", ["loc", [null, [36, 36], [36, 44]]]]], ["class", "lnk-movie"], 0, null, ["loc", [null, [36, 8], [47, 20]]]]],
          locals: ["movie"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 53,
              "column": 0
            }
          },
          "moduleName": "flixnetto/templates/components/movie-list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("aside");
          dom.setAttribute(el1, "class", "controls");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "paging");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "previous-page");
          var el4 = dom.createTextNode("⟨");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          var el4 = dom.createTextNode("Page \n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n         of ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "next-page");
          var el4 = dom.createTextNode("⟩");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("form");
          dom.setAttribute(el2, "class", "frm-sort");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          dom.setAttribute(el3, "for", "lbl-sort-movies");
          var el4 = dom.createTextNode("\n        Sort by\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("select");
          dom.setAttribute(el3, "id", "sort-movies");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "list");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var element4 = dom.childAt(element3, [1]);
          var element5 = dom.childAt(element4, [1]);
          var element6 = dom.childAt(element4, [3]);
          var element7 = dom.childAt(element4, [5]);
          var element8 = dom.childAt(element3, [3, 3]);
          var morphs = new Array(10);
          morphs[0] = dom.createAttrMorph(element5, 'disabled');
          morphs[1] = dom.createAttrMorph(element5, 'onclick');
          morphs[2] = dom.createMorphAt(element6, 1, 1);
          morphs[3] = dom.createMorphAt(element6, 3, 3);
          morphs[4] = dom.createAttrMorph(element7, 'disabled');
          morphs[5] = dom.createAttrMorph(element7, 'onclick');
          morphs[6] = dom.createAttrMorph(element8, 'onchange');
          morphs[7] = dom.createMorphAt(element8, 1, 1);
          morphs[8] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[9] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["attribute", "disabled", ["subexpr", "if", [["get", "isDisablePreviousPage", ["loc", [null, [4, 50], [4, 71]]]], "disabled"], [], ["loc", [null, [4, 45], [4, 84]]]]], ["attribute", "onclick", ["subexpr", "action", ["onSelectPreviousPage", ["get", "type", ["loc", [null, [4, 125], [4, 129]]]], ["get", "searchTitle", ["loc", [null, [4, 130], [4, 141]]]], ["get", "movies.page", ["loc", [null, [4, 142], [4, 153]]]], ["get", "movies.total_pages", ["loc", [null, [4, 154], [4, 172]]]]], [], ["loc", [null, [4, 93], [4, 174]]]]], ["inline", "input", [], ["aria-label", "current page number", "id", "current-page-number", "name", "current page number", "placeholder", "", "type", "text", "value", ["subexpr", "@mut", [["get", "movies.page", ["loc", [null, [12, 14], [12, 25]]]]], [], []], "focus-out", ["subexpr", "action", ["onPageChange", ["get", "type", ["loc", [null, [13, 41], [13, 45]]]], ["get", "searchTitle", ["loc", [null, [13, 46], [13, 57]]]], ["get", "movies.page", ["loc", [null, [13, 58], [13, 69]]]], ["get", "movies.total_pages", ["loc", [null, [13, 70], [13, 88]]]]], [], ["loc", [null, [13, 18], [13, 89]]]], "key-up", ["subexpr", "action", ["onPageChange", ["get", "type", ["loc", [null, [14, 38], [14, 42]]]], ["get", "searchTitle", ["loc", [null, [14, 43], [14, 54]]]], ["get", "movies.page", ["loc", [null, [14, 55], [14, 66]]]], ["get", "movies.total_pages", ["loc", [null, [14, 67], [14, 85]]]]], [], ["loc", [null, [14, 15], [14, 86]]]]], ["loc", [null, [6, 8], [14, 88]]]], ["content", "movies.total_pages", ["loc", [null, [16, 17], [16, 39]]]], ["attribute", "disabled", ["subexpr", "if", [["get", "isDisableNextPage", ["loc", [null, [18, 46], [18, 63]]]], "disabled"], [], ["loc", [null, [18, 41], [18, 76]]]]], ["attribute", "onclick", ["subexpr", "action", ["onSelectNextPage", ["get", "type", ["loc", [null, [18, 113], [18, 117]]]], ["get", "searchTitle", ["loc", [null, [18, 118], [18, 129]]]], ["get", "movies.page", ["loc", [null, [18, 130], [18, 141]]]], ["get", "movies.total_pages", ["loc", [null, [18, 142], [18, 160]]]]], [], ["loc", [null, [18, 85], [18, 162]]]]], ["attribute", "onchange", ["subexpr", "action", ["onSelectSort"], ["value", "target.value"], ["loc", [null, [25, 40], [25, 86]]]]], ["block", "each", [["get", "sortOptions", ["loc", [null, [26, 16], [26, 27]]]]], [], 0, null, ["loc", [null, [26, 8], [28, 17]]]], ["block", "each", [["get", "sortedMovies", ["loc", [null, [34, 12], [34, 24]]]]], [], 1, null, ["loc", [null, [34, 4], [49, 13]]]], ["content", "outlet", ["loc", [null, [52, 2], [52, 12]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 54,
                "column": 2
              },
              "end": {
                "line": 56,
                "column": 2
              }
            },
            "moduleName": "flixnetto/templates/components/movie-list.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            dom.setAttribute(el1, "class", "no-popular-movies");
            var el2 = dom.createTextNode("Bummer! There are no movies that are popular at the moment...");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 56,
                  "column": 2
                },
                "end": {
                  "line": 60,
                  "column": 2
                }
              },
              "moduleName": "flixnetto/templates/components/movie-list.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              dom.setAttribute(el1, "class", "no-search-results");
              var el2 = dom.createTextNode("Bummer! Your search for \"");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\" did not have any matches. Try different keyword(s)!");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1, "id", "btn-back");
              dom.setAttribute(el1, "class", "button");
              dom.setAttribute(el1, "type", "button");
              dom.setAttribute(el1, "name", "button");
              var el2 = dom.createTextNode("Back to Popular Movies");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n  ");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [3]);
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              morphs[1] = dom.createElementMorph(element0);
              return morphs;
            },
            statements: [["content", "searchTitle", ["loc", [null, [57, 58], [57, 73]]]], ["element", "action", ["onBackToPopularMovies"], [], ["loc", [null, [59, 69], [59, 103]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 56,
                "column": 2
              },
              "end": {
                "line": 60,
                "column": 2
              }
            },
            "moduleName": "flixnetto/templates/components/movie-list.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["subexpr", "eq", [["get", "type", ["loc", [null, [56, 16], [56, 20]]]], "search"], [], ["loc", [null, [56, 12], [56, 30]]]]], [], 0, null, ["loc", [null, [56, 2], [60, 2]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 53,
              "column": 0
            },
            "end": {
              "line": 61,
              "column": 0
            }
          },
          "moduleName": "flixnetto/templates/components/movie-list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "eq", [["get", "type", ["loc", [null, [54, 12], [54, 16]]]], "popular"], [], ["loc", [null, [54, 8], [54, 27]]]]], [], 0, 1, ["loc", [null, [54, 2], [60, 9]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 62,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/components/movie-list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "sortedMovies", ["loc", [null, [1, 6], [1, 18]]]]], [], 0, 1, ["loc", [null, [1, 0], [61, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("flixnetto/templates/components/movie-search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "flixnetto/templates/components/movie-search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("section");
          dom.setAttribute(el1, "class", "movies-list-wrapper");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          dom.setAttribute(el2, "class", "heading");
          var el3 = dom.createTextNode("Search Results");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          return morphs;
        },
        statements: [["inline", "movie-list", [], ["movies", ["subexpr", "@mut", [["get", "movieSearchResults", ["loc", [null, [9, 13], [9, 31]]]]], [], []], "searchTitle", ["subexpr", "@mut", [["get", "searchTitle", ["loc", [null, [10, 18], [10, 29]]]]], [], []], "type", "search", "onBackToPopularMovies", ["subexpr", "route-action", ["onBackToPopularMovies"], [], ["loc", [null, [12, 28], [12, 66]]]], "onPageChange", ["subexpr", "route-action", ["onPageChange"], [], ["loc", [null, [13, 19], [13, 48]]]], "onSelectPreviousPage", ["subexpr", "route-action", ["onSelectPreviousPage"], [], ["loc", [null, [14, 27], [14, 64]]]], "onSelectNextPage", ["subexpr", "route-action", ["onSelectNextPage"], [], ["loc", [null, [15, 23], [15, 56]]]]], ["loc", [null, [8, 4], [15, 58]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/components/movie-search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "search-bar", [], ["onSearchMovie", ["subexpr", "action", ["onSearchMovie"], [], ["loc", [null, [2, 16], [2, 40]]]]], ["loc", [null, [1, 0], [2, 42]]]], ["block", "unless", [["get", "isShowPopularMovies", ["loc", [null, [4, 10], [4, 29]]]]], [], 0, null, ["loc", [null, [4, 0], [17, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("flixnetto/templates/components/popular-movies", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/components/popular-movies.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "movies-list-wrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2, "class", "heading");
        var el3 = dom.createTextNode("Popular Movies");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        return morphs;
      },
      statements: [["inline", "movie-list", [], ["movies", ["subexpr", "@mut", [["get", "popularMovies", ["loc", [null, [5, 11], [5, 24]]]]], [], []], "type", "popular", "onBackToPopularMovies", ["subexpr", "route-action", ["onBackToPopularMovies"], [], ["loc", [null, [7, 26], [7, 64]]]], "onPageChange", ["subexpr", "route-action", ["onPageChange"], [], ["loc", [null, [8, 17], [8, 46]]]], "onSelectPreviousPage", ["subexpr", "route-action", ["onSelectPreviousPage"], [], ["loc", [null, [9, 25], [9, 62]]]], "onSelectNextPage", ["subexpr", "route-action", ["onSelectNextPage"], [], ["loc", [null, [10, 21], [10, 54]]]]], ["loc", [null, [4, 2], [10, 56]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("flixnetto/templates/components/search-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/components/search-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "id", "frm-search");
        dom.setAttribute(el1, "role", "search");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "btn-search");
        dom.setAttribute(el3, "class", "button");
        dom.setAttribute(el3, "type", "submit");
        dom.setAttribute(el3, "name", "button");
        var el4 = dom.createTextNode("Search");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["aria-label", "movie title", "id", "input-movie-title", "name", "search movie title", "placeholder", "Search movie title...", "type", "text", "value", ["subexpr", "@mut", [["get", "movieTitle", ["loc", [null, [9, 12], [9, 22]]]]], [], []]], ["loc", [null, [3, 4], [9, 24]]]], ["element", "action", ["onSearchMovie", ["get", "movieTitle", ["loc", [null, [10, 96], [10, 106]]]]], [], ["loc", [null, [10, 71], [10, 108]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("flixnetto/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "flixnetto/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "popular-movies", [], ["popularMovies", ["subexpr", "@mut", [["get", "model.popularMovies", ["loc", [null, [9, 18], [9, 37]]]]], [], []]], ["loc", [null, [8, 2], [9, 39]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "movie-search", [], ["isShowPopularMovies", ["subexpr", "@mut", [["get", "isShowPopularMovies", ["loc", [null, [2, 22], [2, 41]]]]], [], []], "movieSearchResults", ["subexpr", "@mut", [["get", "model.movieSearchResults", ["loc", [null, [3, 21], [3, 45]]]]], [], []], "onBackToPopularMovies", ["subexpr", "route-action", ["onBackToPopularMovies"], [], ["loc", [null, [4, 24], [4, 62]]]], "onSearchMovie", ["subexpr", "route-action", ["onSearchMovie"], [], ["loc", [null, [5, 16], [5, 46]]]]], ["loc", [null, [1, 0], [5, 48]]]], ["block", "if", [["get", "isShowPopularMovies", ["loc", [null, [7, 6], [7, 25]]]]], [], 0, null, ["loc", [null, [7, 0], [10, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("flixnetto/templates/index/movie-id", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "flixnetto/templates/index/movie-id.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "movie-poster");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          morphs[1] = dom.createAttrMorph(element0, 'alt');
          return morphs;
        },
        statements: [["attribute", "src", ["concat", ["https://image.tmdb.org/t/p/w300_and_h450_bestv2/", ["get", "model.movieInfo.poster_path", ["loc", [null, [3, 85], [3, 112]]]]]]], ["attribute", "alt", ["concat", [["get", "model.popularMovie.title", ["loc", [null, [3, 123], [3, 147]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 2
            }
          },
          "moduleName": "flixnetto/templates/index/movie-id.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "movie-poster");
          dom.setAttribute(el1, "src", "http://www.hutchinsontires.com/helpers/img/no_image.jpg");
          dom.setAttribute(el1, "alt", "No movie poster");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 6
            },
            "end": {
              "line": 21,
              "column": 6
            }
          },
          "moduleName": "flixnetto/templates/index/movie-id.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "model.movieInfo.overview", ["loc", [null, [20, 8], [20, 36]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 6
            },
            "end": {
              "line": 23,
              "column": 6
            }
          },
          "moduleName": "flixnetto/templates/index/movie-id.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        No description available\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/index/movie-id.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "movie-details-wrapper");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "movie-details");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3, "class", "title");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("aside");
        dom.setAttribute(el3, "class", "rating");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("☆ ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h5");
        dom.setAttribute(el3, "class", "release-date");
        var el4 = dom.createTextNode("Released: ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3, "class", "subheading");
        var el4 = dom.createTextNode("Overview");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "overview");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [9]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.movieInfo.poster_path", ["loc", [null, [2, 8], [2, 35]]]]], [], 0, 1, ["loc", [null, [2, 2], [6, 9]]]], ["content", "model.movieInfo.title", ["loc", [null, [9, 22], [9, 47]]]], ["content", "model.movieInfo.vote_average", ["loc", [null, [12, 14], [12, 46]]]], ["content", "model.movieInfo.release_date", ["loc", [null, [15, 39], [15, 71]]]], ["block", "if", [["get", "model.movieInfo.overview", ["loc", [null, [19, 12], [19, 36]]]]], [], 2, 3, ["loc", [null, [19, 6], [23, 13]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('flixnetto/config/environment', ['ember'], function(Ember) {
  var prefix = 'flixnetto';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("flixnetto/app")["default"].create({"name":"flixnetto","version":"0.0.0+9a66acd3"});
}

/* jshint ignore:end */
//# sourceMappingURL=flixnetto.map
