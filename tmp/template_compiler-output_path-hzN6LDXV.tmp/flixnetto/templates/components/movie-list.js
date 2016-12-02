export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
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
          morphs[1] = dom.createMorphAt(element2,0,0);
          return morphs;
        },
        statements: [
          ["attribute","value",["get","sortOption.property",["loc",[null,[27,26],[27,45]]]]],
          ["content","sortOption.label",["loc",[null,[27,48],[27,68]]]]
        ],
        locals: ["sortOption"],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
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
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","string-truncate",[],["content",["subexpr","@mut",[["get","movie.overview",["loc",[null,[41,42],[41,56]]]]],[],[]],"maxLength",100,"suffix","..."],["loc",[null,[41,16],[41,85]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
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
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
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
            dom.setAttribute(el1,"class","movie-info");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            dom.setAttribute(el2,"class","title");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2,"class","overview");
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
            morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
            morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
            return morphs;
          },
          statements: [
            ["content","movie.title",["loc",[null,[38,30],[38,45]]]],
            ["block","if",[["get","movie.overview",["loc",[null,[40,20],[40,34]]]]],[],0,1,["loc",[null,[40,14],[44,21]]]]
          ],
          locals: [],
          templates: [child0, child1]
        };
      }());
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
          dom.setAttribute(el1,"class","movie");
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
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["block","link-to",["index.movie-id",["get","movie.id",["loc",[null,[36,36],[36,44]]]]],["class","lnk-movie"],0,null,["loc",[null,[36,8],[47,20]]]]
        ],
        locals: ["movie"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
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
        dom.setAttribute(el1,"class","controls");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","paging");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3,"class","previous-page");
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
        dom.setAttribute(el3,"class","next-page");
        var el4 = dom.createTextNode("⟩");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2,"class","frm-sort");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","lbl-sort-movies");
        var el4 = dom.createTextNode("\n        Sort by\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("select");
        dom.setAttribute(el3,"id","sort-movies");
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
        dom.setAttribute(el1,"class","list");
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
        morphs[2] = dom.createMorphAt(element6,1,1);
        morphs[3] = dom.createMorphAt(element6,3,3);
        morphs[4] = dom.createAttrMorph(element7, 'disabled');
        morphs[5] = dom.createAttrMorph(element7, 'onclick');
        morphs[6] = dom.createAttrMorph(element8, 'onchange');
        morphs[7] = dom.createMorphAt(element8,1,1);
        morphs[8] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
        morphs[9] = dom.createMorphAt(fragment,5,5,contextualElement);
        return morphs;
      },
      statements: [
        ["attribute","disabled",["subexpr","if",[["get","isDisablePreviousPage",["loc",[null,[4,50],[4,71]]]],"disabled"],[],["loc",[null,[4,45],[4,84]]]]],
        ["attribute","onclick",["subexpr","action",["onSelectPreviousPage",["get","type",["loc",[null,[4,125],[4,129]]]],["get","searchTitle",["loc",[null,[4,130],[4,141]]]],["get","movies.page",["loc",[null,[4,142],[4,153]]]],["get","movies.total_pages",["loc",[null,[4,154],[4,172]]]]],[],["loc",[null,[4,93],[4,174]]]]],
        ["inline","input",[],["aria-label","current page number","id","current-page-number","name","current page number","placeholder","","type","text","value",["subexpr","@mut",[["get","movies.page",["loc",[null,[12,14],[12,25]]]]],[],[]],"focus-out",["subexpr","action",["onPageChange",["get","type",["loc",[null,[13,41],[13,45]]]],["get","searchTitle",["loc",[null,[13,46],[13,57]]]],["get","movies.page",["loc",[null,[13,58],[13,69]]]],["get","movies.total_pages",["loc",[null,[13,70],[13,88]]]]],[],["loc",[null,[13,18],[13,89]]]],"key-up",["subexpr","action",["onPageChange",["get","type",["loc",[null,[14,38],[14,42]]]],["get","searchTitle",["loc",[null,[14,43],[14,54]]]],["get","movies.page",["loc",[null,[14,55],[14,66]]]],["get","movies.total_pages",["loc",[null,[14,67],[14,85]]]]],[],["loc",[null,[14,15],[14,86]]]]],["loc",[null,[6,8],[14,88]]]],
        ["content","movies.total_pages",["loc",[null,[16,17],[16,39]]]],
        ["attribute","disabled",["subexpr","if",[["get","isDisableNextPage",["loc",[null,[18,46],[18,63]]]],"disabled"],[],["loc",[null,[18,41],[18,76]]]]],
        ["attribute","onclick",["subexpr","action",["onSelectNextPage",["get","type",["loc",[null,[18,113],[18,117]]]],["get","searchTitle",["loc",[null,[18,118],[18,129]]]],["get","movies.page",["loc",[null,[18,130],[18,141]]]],["get","movies.total_pages",["loc",[null,[18,142],[18,160]]]]],[],["loc",[null,[18,85],[18,162]]]]],
        ["attribute","onchange",["subexpr","action",["onSelectSort"],["value","target.value"],["loc",[null,[25,40],[25,86]]]]],
        ["block","each",[["get","sortOptions",["loc",[null,[26,16],[26,27]]]]],[],0,null,["loc",[null,[26,8],[28,17]]]],
        ["block","each",[["get","sortedMovies",["loc",[null,[34,12],[34,24]]]]],[],1,null,["loc",[null,[34,4],[49,13]]]],
        ["content","outlet",["loc",[null,[52,2],[52,12]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
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
          dom.setAttribute(el1,"class","no-popular-movies");
          var el2 = dom.createTextNode("Bummer! There are no movies that are popular at the moment...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
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
            dom.setAttribute(el1,"class","no-search-results");
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
            dom.setAttribute(el1,"id","btn-back");
            dom.setAttribute(el1,"class","button");
            dom.setAttribute(el1,"type","button");
            dom.setAttribute(el1,"name","button");
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
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            morphs[1] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [
            ["content","searchTitle",["loc",[null,[57,58],[57,73]]]],
            ["element","action",["onBackToPopularMovies"],[],["loc",[null,[59,69],[59,103]]]]
          ],
          locals: [],
          templates: []
        };
      }());
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
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["subexpr","eq",[["get","type",["loc",[null,[56,16],[56,20]]]],"search"],[],["loc",[null,[56,12],[56,30]]]]],[],0,null,["loc",[null,[56,2],[60,2]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
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
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["subexpr","eq",[["get","type",["loc",[null,[54,12],[54,16]]]],"popular"],[],["loc",[null,[54,8],[54,27]]]]],[],0,1,["loc",[null,[54,2],[60,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","sortedMovies",["loc",[null,[1,6],[1,18]]]]],[],0,1,["loc",[null,[1,0],[61,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));