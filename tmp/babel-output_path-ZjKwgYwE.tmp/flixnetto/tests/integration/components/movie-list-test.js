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