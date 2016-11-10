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
    // this.route('popular-movies', function() {
    //   this.route('test-id', { path: '/:id' }, function() {
    //     this.route('setup');
    //     this.route('iterations', function() {
    //       this.route('index', { path: '/' });
    //       this.route('iteration-id', { path: '/:iterationId' }, function() {
    //         this.route('index', { path: '/' });
    //         this.route('setup');
    //         this.route('results-overview');
    //         this.route('data-deep-dive');
    //         this.route('export-custom-report');
    //       });
    //     });
    //     this.route('test-history');
    //     this.route('on-demand');
    //   });
    //   this.route('create', function() {
    //     this.route('basic-info');
    //   });
    // });
  });

  exports['default'] = Router;
});
define('flixnetto/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var movieSearchResults = [];
      // return Ember.$.getJSON('/items.json');
      // return Ember.$.getJSON('http://www.omdbapi.com/?s=' + query['s'])
      //   .then(function(result) {
      //     if (result.hasOwnProperty('Search')) {
      //       return result.Search.map(function(c) {
      //         return {
      //           id: c.imdbID,
      //           title: c.Title,
      //           year: c.Year,
      //           type: c.Type
      //         };
      //     });
      //     } else {
      //       return [];
      //     }
      //   });
      return { movieSearchResults: movieSearchResults };
    },

    /**
     * Actions this route will take care of.
     */
    actions: {
      onSearchMovie: function onSearchMovie(movieTitle) {
        console.log(movieTitle);
        var _this = this;

        _ember['default'].$.getJSON('https://api.themoviedb.org/3/search/company?api_key=54150846c1fcd55b2da9fd77bc9d3e86&query=' + movieTitle).then(function (response) {
          console.log(response);
          _ember['default'].set(_this.currentModel, 'movieSearchResults', response.results);
        });
      }
    }
  });
});
define('flixnetto/routes/popular-movies', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var _this = this;
      var popularMoviesResults = [];

      _ember['default'].$.getJSON('https://api.themoviedb.org/3/movie/popular?api_key=54150846c1fcd55b2da9fd77bc9d3e86&language=en-US&page=1').then(function (response) {
        console.log('popularMoviesResults:', response);
        _ember['default'].set(_this.currentModel, 'popularMoviesResults', response.results);
      });
      // return Ember.$.getJSON('/items.json');
      // return Ember.$.getJSON('http://www.omdbapi.com/?s=' + query['s'])
      //   .then(function(result) {
      //     if (result.hasOwnProperty('Search')) {
      //       return result.Search.map(function(c) {
      //         return {
      //           id: c.imdbID,
      //           title: c.Title,
      //           year: c.Year,
      //           type: c.Type
      //         };
      //     });
      //     } else {
      //       return [];
      //     }
      //   });
      return { popularMoviesResults: popularMoviesResults };
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
              "line": 7,
              "column": 25
            },
            "end": {
              "line": 7,
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
            "line": 12,
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
        dom.setAttribute(el1, "id", "title");
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
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
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [4]), 0, 0);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["home"], [], 0, null, ["loc", [null, [5, 25], [5, 60]]]], ["block", "link-to", ["popular-movies"], [], 1, null, ["loc", [null, [7, 25], [7, 80]]]], ["content", "outlet", ["loc", [null, [11, 0], [11, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("flixnetto/templates/components/search-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 26,
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
        var el1 = dom.createComment(" Search bar ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <input id=\"movie-title\" type=\"text\" name=\"search\" placeholder=\"Search movie title...\"/> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "id", "frm-search");
        dom.setAttribute(el1, "role", "search");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
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
        var element0 = dom.childAt(fragment, [4, 1]);
        var element1 = dom.childAt(element0, [4]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 2, 2);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["aria-label", "movie title", "id", "input-movie-title", "name", "search movie title", "placeholder", "Search movie title...", "type", "text", "value", ["subexpr", "@mut", [["get", "movieTitle", ["loc", [null, [22, 12], [22, 22]]]]], [], []]], ["loc", [null, [16, 4], [22, 24]]]], ["element", "action", ["onSearchMovie", ["get", "movieTitle", ["loc", [null, [23, 81], [23, 91]]]]], [], ["loc", [null, [23, 56], [23, 93]]]]],
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
          dom.setAttribute(el2, "class", "title");
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
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 6
              },
              "end": {
                "line": 11,
                "column": 6
              }
            },
            "moduleName": "flixnetto/templates/popular-movies.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "popular-movies-item");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            dom.setAttribute(el2, "class", "title");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "truncate");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            return morphs;
          },
          statements: [["content", "popularMoviesResult.title", ["loc", [null, [8, 28], [8, 57]]]], ["content", "popularMoviesResult.overview", ["loc", [null, [9, 30], [9, 62]]]]],
          locals: ["popularMoviesResult", "index"],
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
              "column": 2
            },
            "end": {
              "line": 13,
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
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "popular-movies-list");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
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
        statements: [["block", "each", [["get", "model.popularMoviesResults", ["loc", [null, [6, 14], [6, 40]]]]], [], 0, null, ["loc", [null, [6, 6], [11, 15]]]]],
        locals: [],
        templates: [child0]
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
              "line": 13,
              "column": 2
            },
            "end": {
              "line": 17,
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
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "no-popular-movies");
          var el2 = dom.createTextNode("\n      Bummer! There are no movies that are popular at the moment...\n    ");
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
            "line": 19,
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
        dom.setAttribute(el1, "class", "popular-movies");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2, "class", "section-title");
        var el3 = dom.createTextNode("Popular Movies");
        dom.appendChild(el2, el3);
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
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.popularMoviesResults", ["loc", [null, [4, 8], [4, 34]]]]], [], 0, 1, ["loc", [null, [4, 2], [17, 9]]]]],
      locals: [],
      templates: [child0, child1]
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
  require("flixnetto/app")["default"].create({"name":"flixnetto","version":"0.0.0+89ca54bf"});
}

/* jshint ignore:end */
//# sourceMappingURL=flixnetto.map
