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