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