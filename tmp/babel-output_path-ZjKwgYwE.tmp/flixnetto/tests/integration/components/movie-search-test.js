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