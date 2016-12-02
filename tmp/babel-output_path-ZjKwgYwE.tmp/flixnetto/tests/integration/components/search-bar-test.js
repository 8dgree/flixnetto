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