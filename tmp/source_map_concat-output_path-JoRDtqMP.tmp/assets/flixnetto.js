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
    this.route('home', { path: '/' });
    this.route('popular-movies', { path: '/popular-movies' });
  });

  exports['default'] = Router;
});
define('flixnetto/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var movieSearchResults = [];

      return { movieSearchResults: movieSearchResults };
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
      onSearchMovie: function onSearchMovie(movieTitle) {
        var _this = this;

        _ember['default'].$.getJSON('https://api.themoviedb.org/3/search/company?api_key=54150846c1fcd55b2da9fd77bc9d3e86&query=' + movieTitle).then(function (response) {
          _ember['default'].set(_this.currentModel, 'movieSearchResults', response.results);
        });
      }
    }
  });
});
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
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 25
            },
            "end": {
              "line": 5,
              "column": 48
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
          var el1 = dom.createTextNode("Home");
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
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 25
            },
            "end": {
              "line": 6,
              "column": 68
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
          var el1 = dom.createTextNode("Popular Movies");
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
            "line": 11,
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
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "id", "app-name");
        var el2 = dom.createTextNode("Flixnetto");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "nav-wrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "nav-list");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "nav-item");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "nav-item");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["home"], [], 0, null, ["loc", [null, [5, 25], [5, 60]]]], ["block", "link-to", ["popular-movies"], [], 1, null, ["loc", [null, [6, 25], [6, 80]]]], ["content", "outlet", ["loc", [null, [10, 0], [10, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("flixnetto/templates/components/popular-movies/popular-movie-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 6
            },
            "end": {
              "line": 27,
              "column": 6
            }
          },
          "moduleName": "flixnetto/templates/components/popular-movies/popular-movie-list.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
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
        statements: [["attribute", "value", ["get", "sortOption.property", ["loc", [null, [26, 24], [26, 43]]]]], ["content", "sortOption.label", ["loc", [null, [26, 46], [26, 66]]]]],
        locals: ["sortOption"],
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
                "line": 34,
                "column": 4
              },
              "end": {
                "line": 41,
                "column": 4
              }
            },
            "moduleName": "flixnetto/templates/components/popular-movies/popular-movie-list.hbs"
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
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "movie-info");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h3");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            dom.setAttribute(el3, "class", "overview");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'onclick');
            morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
            return morphs;
          },
          statements: [["attribute", "onclick", ["subexpr", "action", ["onViewMovieDetails", ["get", "popularMovie", ["loc", [null, [35, 62], [35, 74]]]]], [], ["loc", [null, [35, 32], [35, 76]]]]], ["content", "popularMovie.title", ["loc", [null, [37, 28], [37, 50]]]], ["inline", "string-truncate", [], ["content", ["subexpr", "@mut", [["get", "popularMovie.overview", ["loc", [null, [38, 56], [38, 77]]]]], [], []], "maxLength", 100, "suffix", "..."], ["loc", [null, [38, 30], [38, 106]]]]],
          locals: ["popularMovie"],
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
              "line": 32,
              "column": 0
            },
            "end": {
              "line": 43,
              "column": 0
            }
          },
          "moduleName": "flixnetto/templates/components/popular-movies/popular-movie-list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "movie-list");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
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
        statements: [["block", "each", [["get", "sortedPopularMovies", ["loc", [null, [34, 12], [34, 31]]]]], [], 0, null, ["loc", [null, [34, 4], [41, 13]]]]],
        locals: [],
        templates: [child0]
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
              "line": 43,
              "column": 0
            },
            "end": {
              "line": 47,
              "column": 0
            }
          },
          "moduleName": "flixnetto/templates/components/popular-movies/popular-movie-list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "no-popular-movies");
          var el2 = dom.createTextNode("\n    Bummer! There are no movies that are popular at the moment...\n  ");
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
            "line": 48,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/components/popular-movies/popular-movie-list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("aside");
        dom.setAttribute(el1, "class", "controls");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "paging");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "previous-page");
        var el4 = dom.createTextNode("⟨");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Page \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n       of ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "next-page");
        var el4 = dom.createTextNode("⟩");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "class", "frm-sort");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "lbl-sort-movies");
        var el4 = dom.createTextNode("\n      Sort by\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("select");
        dom.setAttribute(el3, "id", "sort-movies");
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
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element4, [3]);
        var element7 = dom.childAt(element4, [5]);
        var element8 = dom.childAt(element3, [3, 3]);
        var morphs = new Array(9);
        morphs[0] = dom.createAttrMorph(element5, 'disabled');
        morphs[1] = dom.createAttrMorph(element5, 'onclick');
        morphs[2] = dom.createMorphAt(element6, 1, 1);
        morphs[3] = dom.createMorphAt(element6, 3, 3);
        morphs[4] = dom.createAttrMorph(element7, 'disabled');
        morphs[5] = dom.createAttrMorph(element7, 'onclick');
        morphs[6] = dom.createAttrMorph(element8, 'onchange');
        morphs[7] = dom.createMorphAt(element8, 1, 1);
        morphs[8] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "disabled", ["subexpr", "if", [["get", "isDisablePreviousPage", ["loc", [null, [3, 48], [3, 69]]]], "disabled"], [], ["loc", [null, [3, 43], [3, 82]]]]], ["attribute", "onclick", ["subexpr", "action", ["onSelectPreviousPage", ["get", "popularMovies.page", ["loc", [null, [3, 123], [3, 141]]]]], [], ["loc", [null, [3, 91], [3, 143]]]]], ["inline", "input", [], ["aria-label", "current page number", "id", "current-page-number", "name", "current page number", "placeholder", "", "type", "text", "value", ["subexpr", "@mut", [["get", "popularMovies.page", ["loc", [null, [11, 12], [11, 30]]]]], [], []], "focus-out", ["subexpr", "action", ["onPageChange", ["get", "popularMovies.page", ["loc", [null, [12, 39], [12, 57]]]]], [], ["loc", [null, [12, 16], [12, 58]]]], "key-up", ["subexpr", "action", ["onPageChange", ["get", "popularMovies.page", ["loc", [null, [13, 36], [13, 54]]]]], [], ["loc", [null, [13, 13], [13, 55]]]]], ["loc", [null, [5, 6], [13, 57]]]], ["content", "popularMovies.total_pages", ["loc", [null, [15, 15], [15, 44]]]], ["attribute", "disabled", ["subexpr", "if", [["get", "isDisableNextPage", ["loc", [null, [17, 44], [17, 61]]]], "disabled"], [], ["loc", [null, [17, 39], [17, 74]]]]], ["attribute", "onclick", ["subexpr", "action", ["onSelectNextPage", ["get", "popularMovies.page", ["loc", [null, [17, 111], [17, 129]]]]], [], ["loc", [null, [17, 83], [17, 131]]]]], ["attribute", "onchange", ["subexpr", "action", ["onSelectSort"], ["value", "target.value"], ["loc", [null, [24, 38], [24, 84]]]]], ["block", "each", [["get", "sortOptions", ["loc", [null, [25, 14], [25, 25]]]]], [], 0, null, ["loc", [null, [25, 6], [27, 15]]]], ["block", "if", [["get", "popularMovies.results", ["loc", [null, [32, 6], [32, 27]]]]], [], 1, 2, ["loc", [null, [32, 0], [47, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
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
      statements: [["inline", "input", [], ["aria-label", "movie title", "id", "input-movie-title", "name", "search movie title", "placeholder", "Search movie title...", "type", "text", "value", ["subexpr", "@mut", [["get", "movieTitle", ["loc", [null, [9, 12], [9, 22]]]]], [], []]], ["loc", [null, [3, 4], [9, 24]]]], ["element", "action", ["onSearchMovie", ["get", "movieTitle", ["loc", [null, [10, 81], [10, 91]]]]], [], ["loc", [null, [10, 56], [10, 93]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("flixnetto/templates/home", ["exports"], function (exports) {
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
                "line": 9,
                "column": 6
              },
              "end": {
                "line": 11,
                "column": 6
              }
            },
            "moduleName": "flixnetto/templates/home.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "movieSearchResult.name", ["loc", [null, [10, 12], [10, 38]]]]],
          locals: ["movieSearchResult"],
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
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "flixnetto/templates/home.hbs"
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
          dom.setAttribute(el1, "class", "search-results-wrapper");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          dom.setAttribute(el2, "class", "heading");
          var el3 = dom.createTextNode("Search Results");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2, "class", "movie-search-results-list");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.movieSearchResults", ["loc", [null, [9, 14], [9, 38]]]]], [], 0, null, ["loc", [null, [9, 6], [11, 15]]]]],
        locals: [],
        templates: [child0]
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
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/home.hbs"
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
      statements: [["inline", "search-bar", [], ["onSearchMovie", ["subexpr", "route-action", ["onSearchMovie"], [], ["loc", [null, [2, 16], [2, 46]]]]], ["loc", [null, [1, 0], [2, 48]]]], ["block", "if", [["get", "model.movieSearchResults", ["loc", [null, [4, 6], [4, 30]]]]], [], 0, null, ["loc", [null, [4, 0], [14, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("flixnetto/templates/popular-movies", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 2
            },
            "end": {
              "line": 30,
              "column": 2
            }
          },
          "moduleName": "flixnetto/templates/popular-movies.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("section");
          dom.setAttribute(el1, "class", "movie-details-wrapper");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "class", "movie-poster");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "movie-details");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          dom.setAttribute(el3, "class", "title");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("aside");
          dom.setAttribute(el3, "class", "rating");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          var el5 = dom.createTextNode("☆ ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h5");
          dom.setAttribute(el3, "class", "release-date");
          var el4 = dom.createTextNode("Released: ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          dom.setAttribute(el3, "class", "subheading");
          var el4 = dom.createTextNode("Overview");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "overview");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createAttrMorph(element1, 'src');
          morphs[1] = dom.createAttrMorph(element1, 'alt');
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element2, [3, 1]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
          morphs[5] = dom.createMorphAt(dom.childAt(element2, [9]), 1, 1);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", ["https://image.tmdb.org/t/p/w300_and_h450_bestv2/", ["get", "model.popularMovie.poster_path", ["loc", [null, [13, 87], [13, 117]]]]]]], ["attribute", "alt", ["concat", [["get", "model.popularMovie.title", ["loc", [null, [13, 128], [13, 152]]]]]]], ["content", "model.popularMovie.title", ["loc", [null, [16, 26], [16, 54]]]], ["content", "model.popularMovie.vote_average", ["loc", [null, [19, 18], [19, 53]]]], ["content", "model.popularMovie.release_date", ["loc", [null, [22, 43], [22, 78]]]], ["content", "model.popularMovie.overview", ["loc", [null, [26, 10], [26, 41]]]]],
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
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "flixnetto/templates/popular-movies.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "popular-movies-wrapper");
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
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element3, 3, 3);
        morphs[1] = dom.createMorphAt(element3, 5, 5);
        return morphs;
      },
      statements: [["inline", "popular-movies/popular-movie-list", [], ["popularMovies", ["subexpr", "@mut", [["get", "model.popularMovies", ["loc", [null, [5, 18], [5, 37]]]]], [], []], "onPageChange", ["subexpr", "route-action", ["onPageChange"], [], ["loc", [null, [6, 17], [6, 46]]]], "onSelectPreviousPage", ["subexpr", "route-action", ["onSelectPreviousPage"], [], ["loc", [null, [7, 25], [7, 62]]]], "onSelectNextPage", ["subexpr", "route-action", ["onSelectNextPage"], [], ["loc", [null, [8, 21], [8, 54]]]], "onViewMovieDetails", ["subexpr", "route-action", ["onViewMovieDetails"], [], ["loc", [null, [9, 23], [9, 58]]]]], ["loc", [null, [4, 2], [9, 60]]]], ["block", "if", [["get", "model.popularMovie.title", ["loc", [null, [11, 8], [11, 32]]]]], [], 0, null, ["loc", [null, [11, 2], [30, 9]]]]],
      locals: [],
      templates: [child0]
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
  require("flixnetto/app")["default"].create({"name":"flixnetto","version":"0.0.0+345961e4"});
}

/* jshint ignore:end */
//# sourceMappingURL=flixnetto.map
