define('flixnetto/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('flixnetto/tests/components/movie-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/movie-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/movie-list.js should pass jshint.');
  });
});
define('flixnetto/tests/components/movie-search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/movie-search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/movie-search.js should pass jshint.');
  });
});
define('flixnetto/tests/components/popular-movies.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/popular-movies.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/popular-movies.js should pass jshint.');
  });
});
define('flixnetto/tests/components/search-bar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/search-bar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/search-bar.js should pass jshint.');
  });
});
define('flixnetto/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('flixnetto/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('flixnetto/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('flixnetto/tests/helpers/eq.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/eq.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/eq.js should pass jshint.');
  });
});
define('flixnetto/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'flixnetto/tests/helpers/start-app', 'flixnetto/tests/helpers/destroy-app'], function (exports, _qunit, _flixnettoTestsHelpersStartApp, _flixnettoTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _flixnettoTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _flixnettoTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('flixnetto/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('flixnetto/tests/helpers/resolver', ['exports', 'flixnetto/resolver', 'flixnetto/config/environment'], function (exports, _flixnettoResolver, _flixnettoConfigEnvironment) {

  var resolver = _flixnettoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _flixnettoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _flixnettoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('flixnetto/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('flixnetto/tests/helpers/start-app', ['exports', 'ember', 'flixnetto/app', 'flixnetto/config/environment'], function (exports, _ember, _flixnettoApp, _flixnettoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _flixnettoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _flixnettoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('flixnetto/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('flixnetto/tests/helpers/string-truncate.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/string-truncate.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/string-truncate.js should pass jshint.');
  });
});
define('flixnetto/tests/integration/components/movie-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('movie-list', 'Integration | Component | movie list', {
    integration: true,

    beforeEach: function beforeEach() {
      this.setProperties({
        isShowPopularMovies: false,
        searchTitle: 'arrival',
        movieSearchResults: {
          "page": 1,
          "results": [{
            "id": 21067,
            "logo_path": null,
            "name": "Arrival Pictures"
          }, {
            "id": 7130,
            "logo_path": null,
            "name": "Dead On Arrival Digital"
          }],
          "total_pages": 1,
          "total_results": 2
        },
        onBackToPopularMovies: function onBackToPopularMovies() {},
        onPageChange: function onPageChange() {},
        onSelectPreviousPage: function onSelectPreviousPage() {},
        onSelectNextPage: function onSelectNextPage() {}
      });
    }
  });

  (0, _emberQunit.test)('"movie-list" component and its contents render', function (assert) {
    assert.expect(4);

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 8,
              'column': 70
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['inline', 'movie-list', [], ['movies', ['subexpr', '@mut', [['get', 'movieSearchResults', ['loc', [null, [2, 27], [2, 45]]]]], [], []], 'searchTitle', ['subexpr', '@mut', [['get', 'searchTitle', ['loc', [null, [3, 32], [3, 43]]]]], [], []], 'type', 'search', 'onBackToPopularMovies', ['subexpr', 'route-action', [['get', 'onBackToPopularMovies', ['loc', [null, [5, 56], [5, 77]]]]], [], ['loc', [null, [5, 42], [5, 78]]]], 'onPageChange', ['subexpr', 'route-action', [['get', 'onPageChange', ['loc', [null, [6, 47], [6, 59]]]]], [], ['loc', [null, [6, 33], [6, 60]]]], 'onSelectPreviousPage', ['subexpr', 'route-action', [['get', 'onSelectPreviousPage', ['loc', [null, [7, 55], [7, 75]]]]], [], ['loc', [null, [7, 41], [7, 76]]]], 'onSelectNextPage', ['subexpr', 'route-action', [['get', 'onSelectNextPage', ['loc', [null, [8, 51], [8, 67]]]]], [], ['loc', [null, [8, 37], [8, 68]]]]], ['loc', [null, [1, 0], [8, 70]]]]],
        locals: [],
        templates: []
      };
    })()));

    // Component renders
    assert.ok(this.$());
    // Pagination exists
    assert.ok(this.$('.paging').length);
    // Sorting exists
    assert.ok(this.$('.frm-sort').length);
    // Movie list exists
    assert.ok(this.$('.movie-list .list').length);
  });
});
define('flixnetto/tests/integration/components/movie-list-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/movie-list-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/movie-list-test.js should pass jshint.');
  });
});
define('flixnetto/tests/integration/components/movie-search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('movie-search', 'Integration | Component | movie search', {
    integration: true,

    beforeEach: function beforeEach() {
      this.setProperties({
        isShowPopularMovies: false,
        movieSearchResults: {
          "page": 1,
          "results": [{
            "id": 21067,
            "logo_path": null,
            "name": "Arrival Pictures"
          }, {
            "id": 7130,
            "logo_path": null,
            "name": "Dead On Arrival Digital"
          }],
          "total_pages": 1,
          "total_results": 2
        },
        onBackToPopularMovies: function onBackToPopularMovies() {},
        onSearchMovie: function onSearchMovie() {}
      });
    }
  });

  (0, _emberQunit.test)('"movie-search" and its contents render', function (assert) {
    assert.expect(4);

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 64
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['inline', 'movie-search', [], ['isShowPopularMovies', ['subexpr', '@mut', [['get', 'isShowPopularMovies', ['loc', [null, [2, 40], [2, 59]]]]], [], []], 'movieSearchResults', ['subexpr', '@mut', [['get', 'movieSearchResults', ['loc', [null, [3, 39], [3, 57]]]]], [], []], 'onBackToPopularMovies', ['subexpr', 'route-action', [['get', 'onBackToPopularMovies', ['loc', [null, [4, 56], [4, 77]]]]], [], ['loc', [null, [4, 42], [4, 78]]]], 'onSearchMovie', ['subexpr', 'route-action', [['get', 'onSearchMovie', ['loc', [null, [5, 48], [5, 61]]]]], [], ['loc', [null, [5, 34], [5, 62]]]]], ['loc', [null, [1, 0], [5, 64]]]]],
        locals: [],
        templates: []
      };
    })()));

    // Component renders
    assert.ok(this.$());
    // Search bar exists
    assert.ok(this.$('.search-bar').length);
    // "Search Results" heading exists
    assert.equal(this.$('.movies-list-wrapper .heading').text().trim(), 'Search Results');
    // Movie list exists
    assert.ok(this.$('.movie-list').length);
  });
});
define('flixnetto/tests/integration/components/movie-search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/movie-search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/movie-search-test.js should pass jshint.');
  });
});
define('flixnetto/tests/integration/components/popular-movies-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('popular-movies', 'Integration | Component | popular movies', {
    integration: true,

    beforeEach: function beforeEach() {
      this.setProperties({
        popularMovies: {
          "page": 1,
          "results": [{
            "poster_path": "\/xfWac8MTYDxujaxgPVcRD9yZaul.jpg",
            "adult": false,
            "overview": "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil.",
            "release_date": "2016-10-25",
            "genre_ids": [28, 12, 14, 878],
            "id": 284052,
            "original_title": "Doctor Strange",
            "original_language": "en",
            "title": "Doctor Strange",
            "backdrop_path": "\/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg",
            "popularity": 53.261516,
            "vote_count": 723,
            "video": false,
            "vote_average": 6.93
          }, {
            "poster_path": "\/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
            "adult": false,
            "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
            "release_date": "2015-05-13",
            "genre_ids": [28, 12, 878, 53],
            "id": 76341,
            "original_title": "Mad Max: Fury Road",
            "original_language": "en",
            "title": "Mad Max: Fury Road",
            "backdrop_path": "\/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
            "popularity": 25.214631,
            "vote_count": 5656,
            "video": false,
            "vote_average": 7.2
          }, {
            "poster_path": "\/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
            "adult": false,
            "overview": "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
            "release_date": "2016-10-19",
            "genre_ids": [53, 28, 80, 18, 9648],
            "id": 343611,
            "original_title": "Jack Reacher: Never Go Back",
            "original_language": "en",
            "title": "Jack Reacher: Never Go Back",
            "backdrop_path": "\/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",
            "popularity": 22.341089,
            "vote_count": 450,
            "video": false,
            "vote_average": 4.45
          }, {
            "poster_path": "\/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
            "adult": false,
            "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
            "release_date": "2015-06-09",
            "genre_ids": [28, 12, 878, 53],
            "id": 135397,
            "original_title": "Jurassic World",
            "original_language": "en",
            "title": "Jurassic World",
            "backdrop_path": "\/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
            "popularity": 19.984124,
            "vote_count": 5209,
            "video": false,
            "vote_average": 6.58
          }, {
            "poster_path": "\/5N20rQURev5CNDcMjHVUZhpoCNC.jpg",
            "adult": false,
            "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
            "release_date": "2016-04-27",
            "genre_ids": [28, 878, 53],
            "id": 271110,
            "original_title": "Captain America: Civil War",
            "original_language": "en",
            "title": "Captain America: Civil War",
            "backdrop_path": "\/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg",
            "popularity": 19.241035,
            "vote_count": 3423,
            "video": false,
            "vote_average": 6.78
          }, {
            "poster_path": "\/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
            "adult": false,
            "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "release_date": "2014-11-05",
            "genre_ids": [12, 18, 878],
            "id": 157336,
            "original_title": "Interstellar",
            "original_language": "en",
            "title": "Interstellar",
            "backdrop_path": "\/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
            "popularity": 18.712164,
            "vote_count": 6010,
            "video": false,
            "vote_average": 8.07
          }, {
            "poster_path": "\/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
            "adult": false,
            "overview": "\"Finding Dory\" reunites Dory with friends Nemo and Marlin on a search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?",
            "release_date": "2016-06-16",
            "genre_ids": [16, 10751],
            "id": 127380,
            "original_title": "Finding Dory",
            "original_language": "en",
            "title": "Finding Dory",
            "backdrop_path": "\/iWRKYHTFlsrxQtfQqFOQyceL83P.jpg",
            "popularity": 18.058763,
            "vote_count": 1299,
            "video": false,
            "vote_average": 6.66
          }, {
            "poster_path": "\/WLQN5aiQG8wc9SeKwixW7pAR8K.jpg",
            "adult": false,
            "overview": "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.",
            "release_date": "2016-06-18",
            "genre_ids": [12, 16, 35, 10751],
            "id": 328111,
            "original_title": "The Secret Life of Pets",
            "original_language": "en",
            "title": "The Secret Life of Pets",
            "backdrop_path": "\/lubzBMQLLmG88CLQ4F3TxZr2Q7N.jpg",
            "popularity": 16.998761,
            "vote_count": 982,
            "video": false,
            "vote_average": 5.95
          }, {
            "poster_path": "\/mLrQMqyZgLeP8FrT5LCobKAiqmK.jpg",
            "adult": false,
            "overview": "The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.",
            "release_date": "2016-07-07",
            "genre_ids": [28, 12, 878, 53],
            "id": 188927,
            "original_title": "Star Trek Beyond",
            "original_language": "en",
            "title": "Star Trek Beyond",
            "backdrop_path": "\/6uBlEXZCUHM15UNZqNig17VdN4m.jpg",
            "popularity": 15.601324,
            "vote_count": 1096,
            "video": false,
            "vote_average": 6.31
          }, {
            "poster_path": "\/4Iu5f2nv7huqvuYkmZvSPOtbFjs.jpg",
            "adult": false,
            "overview": "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
            "release_date": "2016-11-10",
            "genre_ids": [18, 878],
            "id": 329865,
            "original_title": "Arrival",
            "original_language": "en",
            "title": "Arrival",
            "backdrop_path": "\/wFFlaVHmQG4U43m0l3eQqHZluvn.jpg",
            "popularity": 15.36577,
            "vote_count": 65,
            "video": false,
            "vote_average": 6.49
          }, {
            "poster_path": "\/oFOG2yIRcluKfTtYbzz71Vj9bgz.jpg",
            "adult": false,
            "overview": "After waking up in a hospital with amnesia, professor Robert Langdon and a doctor must race against time to foil a deadly global plot.",
            "release_date": "2016-10-13",
            "genre_ids": [28, 80, 9648, 878, 53],
            "id": 207932,
            "original_title": "Inferno",
            "original_language": "en",
            "title": "Inferno",
            "backdrop_path": "\/anmLLbDx9d98NMZRyVUtxwJR6ab.jpg",
            "popularity": 15.046393,
            "vote_count": 421,
            "video": false,
            "vote_average": 5.14
          }, {
            "poster_path": "\/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
            "adult": false,
            "overview": "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
            "release_date": "2015-06-23",
            "genre_ids": [878, 28, 53, 12],
            "id": 87101,
            "original_title": "Terminator Genisys",
            "original_language": "en",
            "title": "Terminator Genisys",
            "backdrop_path": "\/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg",
            "popularity": 14.502513,
            "vote_count": 2418,
            "video": false,
            "vote_average": 5.88
          }, {
            "poster_path": "\/dN3KkgXcDkP1QkOZPz5EGXzS8B7.jpg",
            "adult": false,
            "overview": "Set after the events of Continental Drift, Scrat's epic pursuit of his elusive acorn catapults him outside of Earth, where he accidentally sets off a series of cosmic events that transform and threaten the planet. To save themselves from peril, Manny, Sid, Diego, and the rest of the herd leave their home and embark on a quest full of thrills and spills, highs and lows, laughter and adventure while traveling to exotic new lands and encountering a host of colorful new characters.",
            "release_date": "2016-06-23",
            "genre_ids": [35, 16, 12, 10751, 878],
            "id": 278154,
            "original_title": "Ice Age: Collision Course",
            "original_language": "en",
            "title": "Ice Age: Collision Course",
            "backdrop_path": "\/o29BFNqgXOUT1yHNYusnITsH7P9.jpg",
            "popularity": 14.165306,
            "vote_count": 454,
            "video": false,
            "vote_average": 5.16
          }, {
            "poster_path": "\/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
            "adult": false,
            "overview": "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
            "release_date": "2016-05-18",
            "genre_ids": [28, 12, 14, 878],
            "id": 246655,
            "original_title": "X-Men: Apocalypse",
            "original_language": "en",
            "title": "X-Men: Apocalypse",
            "backdrop_path": "\/oQWWth5AOtbWG9o8SCAviGcADed.jpg",
            "popularity": 14.157449,
            "vote_count": 2193,
            "video": false,
            "vote_average": 6.13
          }, {
            "poster_path": "\/gj282Pniaa78ZJfbaixyLXnXEDI.jpg",
            "adult": false,
            "overview": "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
            "release_date": "2014-11-18",
            "genre_ids": [878, 12, 53],
            "id": 131631,
            "original_title": "The Hunger Games: Mockingjay - Part 1",
            "original_language": "en",
            "title": "The Hunger Games: Mockingjay - Part 1",
            "backdrop_path": "\/83nHcz2KcnEpPXY50Ky2VldewJJ.jpg",
            "popularity": 13.266385,
            "vote_count": 3350,
            "video": false,
            "vote_average": 6.68
          }, {
            "poster_path": "\/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg",
            "adult": false,
            "overview": "Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.",
            "release_date": "2016-06-29",
            "genre_ids": [28, 12],
            "id": 258489,
            "original_title": "The Legend of Tarzan",
            "original_language": "en",
            "title": "The Legend of Tarzan",
            "backdrop_path": "\/uC8RkYALi9VWHeZQWLRUqjxfW09.jpg",
            "popularity": 12.540742,
            "vote_count": 1310,
            "video": false,
            "vote_average": 5.08
          }, {
            "poster_path": "\/jZASQ15M6KUaRvHJhbUButeATDi.jpg",
            "adult": false,
            "overview": "Conflict and tension looms heavily across the broken remains of a distant, post-apocalyptic world. Controlled by a race of oppressive genetically-enhanced humans, the last natural-born humans have no choice but to bow down to their rule. The only alternative is to wander the vast wastelands surrounding the last habitable city, whilst relentlessly hunted by roaming pack of mutated monsters. Meanwhile, outside the towering walls of the citadel, aboard a massive hulking army tank, an uprising occurs amongst the natural-born crew. Their hope lies in the legend of the Republic of EZO: said to return aboard the last starship....",
            "release_date": "2016-07-11",
            "genre_ids": [878, 28],
            "id": 406285,
            "original_title": "The Last Starship",
            "original_language": "en",
            "title": "The Last Starship",
            "backdrop_path": null,
            "popularity": 12.306989,
            "vote_count": 11,
            "video": false,
            "vote_average": 3.59
          }, {
            "poster_path": "\/oDL2ryJ0sV2bmjgshVgJb3qzvwp.jpg",
            "adult": false,
            "overview": "The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
            "release_date": "2014-08-07",
            "genre_ids": [878, 28, 12, 14, 35],
            "id": 98566,
            "original_title": "Teenage Mutant Ninja Turtles",
            "original_language": "en",
            "title": "Teenage Mutant Ninja Turtles",
            "backdrop_path": "\/OqCXGt5nl1cHPeotxCDvXLLe6p.jpg",
            "popularity": 12.278589,
            "vote_count": 1742,
            "video": false,
            "vote_average": 5.84
          }, {
            "poster_path": "\/hGRfWcy1HRGbsjK6jF7NILmqmFT.jpg",
            "adult": false,
            "overview": "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
            "release_date": "2014-10-24",
            "genre_ids": [12, 10751, 16, 28, 35],
            "id": 177572,
            "original_title": "Big Hero 6",
            "original_language": "en",
            "title": "Big Hero 6",
            "backdrop_path": "\/2BXd0t9JdVqCp9sKf6kzMkr7QjB.jpg",
            "popularity": 11.817706,
            "vote_count": 3929,
            "video": false,
            "vote_average": 7.81
          }, {
            "poster_path": "\/jDeDRLEa8JqB3xmKVy6q3bkmDt6.jpg",
            "adult": false,
            "overview": "Sausage Party, the first R-rated CG animated movie, is about one sausage leading a group of supermarket products on a quest to discover the truth about their existence and what really happens when they become chosen to leave the grocery store.",
            "release_date": "2016-07-11",
            "genre_ids": [12, 16, 35, 14],
            "id": 223702,
            "original_title": "Sausage Party",
            "original_language": "en",
            "title": "Sausage Party",
            "backdrop_path": "\/nBvyktlVHjLx5nZ9Oxaoqo5jwbf.jpg",
            "popularity": 11.630156,
            "vote_count": 453,
            "video": false,
            "vote_average": 5.95
          }],
          "total_results": 19618,
          "total_pages": 981
        }
      });
    }
  });

  (0, _emberQunit.test)('"popular-movies" and its contents render', function (assert) {
    assert.expect(2);

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 2,
              'column': 49
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['inline', 'popular-movies', [], ['popularMovies', ['subexpr', '@mut', [['get', 'popularMovies', ['loc', [null, [2, 34], [2, 47]]]]], [], []]], ['loc', [null, [1, 0], [2, 49]]]]],
        locals: [],
        templates: []
      };
    })()));

    // Component renders
    assert.ok(this.$());
    // Movie list exists
    assert.ok(this.$('.movie-list').length);
  });
});
define('flixnetto/tests/integration/components/popular-movies-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/popular-movies-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/popular-movies-test.js should pass jshint.');
  });
});
define('flixnetto/tests/integration/components/search-bar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('search-bar', 'Integration | Component | search bar', {
    integration: true,

    beforeEach: function beforeEach() {
      this.setProperties({
        onSearchMovie: function onSearchMovie() {}
      });
    }
  });

  (0, _emberQunit.test)('"search-bar" component and its contents render', function (assert) {
    assert.expect(3);

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 2,
              'column': 64
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['inline', 'search-bar', [], ['onSearchMovie', ['subexpr', 'route-action', [['get', 'onSearchMovie', ['loc', [null, [2, 48], [2, 61]]]]], [], ['loc', [null, [2, 34], [2, 62]]]]], ['loc', [null, [1, 0], [2, 64]]]]],
        locals: [],
        templates: []
      };
    })()));

    // Component renders
    assert.ok(this.$());
    // Movie title input field exists
    assert.ok(this.$('#input-movie-title').length);
    // "Search" button exists
    assert.ok(this.$('#btn-search').length);
  });
});
define('flixnetto/tests/integration/components/search-bar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/search-bar-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/search-bar-test.js should pass jshint.');
  });
});
define('flixnetto/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('flixnetto/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('flixnetto/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('flixnetto/tests/routes/index/movie-id.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index/movie-id.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index/movie-id.js should pass jshint.');
  });
});
define('flixnetto/tests/test-helper', ['exports', 'flixnetto/tests/helpers/resolver', 'ember-qunit'], function (exports, _flixnettoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_flixnettoTestsHelpersResolver['default']);
});
define('flixnetto/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('flixnetto/tests/unit/controllers/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('flixnetto/tests/unit/controllers/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass jshint.');
  });
});
define('flixnetto/tests/unit/helpers/eq-test', ['exports', 'flixnetto/helpers/eq', 'qunit'], function (exports, _flixnettoHelpersEq, _qunit) {

  (0, _qunit.module)('Unit | Helper | eq');

  (0, _qunit.test)('it works', function (assert) {
    var params = {
      first: 'test string',
      second: 'test string'
    };
    var result = (0, _flixnettoHelpersEq.eq)(params);
    assert.ok(result);
  });
});
define('flixnetto/tests/unit/helpers/eq-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers/eq-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/eq-test.js should pass jshint.');
  });
});
define('flixnetto/tests/unit/helpers/string-truncate-test', ['exports', 'flixnetto/helpers/string-truncate', 'qunit'], function (exports, _flixnettoHelpersStringTruncate, _qunit) {

  (0, _qunit.module)('Unit | Helper | string truncate');

  (0, _qunit.test)('it should not truncate string', function (assert) {
    var params = {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      maxLength: 70
    };
    var truncateResult = (0, _flixnettoHelpersStringTruncate.stringTruncate)('', params);
    var result = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    assert.equal(truncateResult, result);
  });

  (0, _qunit.test)('it should truncate string', function (assert) {
    var params = {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      maxLength: 10
    };
    var truncateResult = (0, _flixnettoHelpersStringTruncate.stringTruncate)('', params);
    var result = 'Lorem ipsu...';

    assert.equal(truncateResult, result);
  });
});
define('flixnetto/tests/unit/helpers/string-truncate-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers/string-truncate-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/string-truncate-test.js should pass jshint.');
  });
});
define('flixnetto/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('flixnetto/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('flixnetto/tests/unit/routes/index/movie-id-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index/movie-id', 'Unit | Route | index/movie id', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('flixnetto/tests/unit/routes/index/movie-id-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/index/movie-id-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index/movie-id-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('flixnetto/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
