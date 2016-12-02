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