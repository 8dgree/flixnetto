export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        morphs[1] = dom.createMorphAt(element2,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["get","sortOption.property",["loc",[null,[26,24],[26,43]]]]],
        ["content","sortOption.label",["loc",[null,[26,46],[26,66]]]]
      ],
      locals: ["sortOption"],
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
          dom.setAttribute(el1,"class","movie");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","movie-info");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          dom.setAttribute(el3,"class","title");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","overview");
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
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
          return morphs;
        },
        statements: [
          ["attribute","onclick",["subexpr","action",["onViewMovieDetails",["get","popularMovie",["loc",[null,[35,62],[35,74]]]]],[],["loc",[null,[35,32],[35,76]]]]],
          ["content","popularMovie.title",["loc",[null,[37,28],[37,50]]]],
          ["inline","string-truncate",[],["content",["subexpr","@mut",[["get","popularMovie.overview",["loc",[null,[38,56],[38,77]]]]],[],[]],"maxLength",100,"suffix","..."],["loc",[null,[38,30],[38,106]]]]
        ],
        locals: ["popularMovie"],
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
        dom.setAttribute(el1,"class","movie-list");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","sortedPopularMovies",["loc",[null,[34,12],[34,31]]]]],[],0,null,["loc",[null,[34,4],[41,13]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child2 = (function() {
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
        dom.setAttribute(el1,"class","no-popular-movies");
        var el2 = dom.createTextNode("\n    Bummer! There are no movies that are popular at the moment...\n  ");
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
      dom.setAttribute(el1,"class","controls");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","paging");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"class","previous-page");
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
      dom.setAttribute(el3,"class","next-page");
      var el4 = dom.createTextNode("⟩");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      dom.setAttribute(el2,"class","frm-sort");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","lbl-sort-movies");
      var el4 = dom.createTextNode("\n      Sort by\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("select");
      dom.setAttribute(el3,"id","sort-movies");
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
      morphs[2] = dom.createMorphAt(element6,1,1);
      morphs[3] = dom.createMorphAt(element6,3,3);
      morphs[4] = dom.createAttrMorph(element7, 'disabled');
      morphs[5] = dom.createAttrMorph(element7, 'onclick');
      morphs[6] = dom.createAttrMorph(element8, 'onchange');
      morphs[7] = dom.createMorphAt(element8,1,1);
      morphs[8] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["attribute","disabled",["subexpr","if",[["get","isDisablePreviousPage",["loc",[null,[3,48],[3,69]]]],"disabled"],[],["loc",[null,[3,43],[3,82]]]]],
      ["attribute","onclick",["subexpr","action",["onSelectPreviousPage",["get","popularMovies.page",["loc",[null,[3,123],[3,141]]]]],[],["loc",[null,[3,91],[3,143]]]]],
      ["inline","input",[],["aria-label","current page number","id","current-page-number","name","current page number","placeholder","","type","text","value",["subexpr","@mut",[["get","popularMovies.page",["loc",[null,[11,12],[11,30]]]]],[],[]],"focus-out",["subexpr","action",["onPageChange",["get","popularMovies.page",["loc",[null,[12,39],[12,57]]]]],[],["loc",[null,[12,16],[12,58]]]],"key-up",["subexpr","action",["onPageChange",["get","popularMovies.page",["loc",[null,[13,36],[13,54]]]]],[],["loc",[null,[13,13],[13,55]]]]],["loc",[null,[5,6],[13,57]]]],
      ["content","popularMovies.total_pages",["loc",[null,[15,15],[15,44]]]],
      ["attribute","disabled",["subexpr","if",[["get","isDisableNextPage",["loc",[null,[17,44],[17,61]]]],"disabled"],[],["loc",[null,[17,39],[17,74]]]]],
      ["attribute","onclick",["subexpr","action",["onSelectNextPage",["get","popularMovies.page",["loc",[null,[17,111],[17,129]]]]],[],["loc",[null,[17,83],[17,131]]]]],
      ["attribute","onchange",["subexpr","action",["onSelectSort"],["value","target.value"],["loc",[null,[24,38],[24,84]]]]],
      ["block","each",[["get","sortOptions",["loc",[null,[25,14],[25,25]]]]],[],0,null,["loc",[null,[25,6],[27,15]]]],
      ["block","if",[["get","popularMovies.results",["loc",[null,[32,6],[32,27]]]]],[],1,2,["loc",[null,[32,0],[47,7]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));