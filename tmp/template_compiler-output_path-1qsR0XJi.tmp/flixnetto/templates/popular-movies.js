export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 11,
            "column": 2
          },
          "end": {
            "line": 30,
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
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","movie-details-wrapper");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"class","movie-poster");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","movie-details");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3,"class","title");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("aside");
        dom.setAttribute(el3,"class","rating");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("☆ ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h5");
        dom.setAttribute(el3,"class","release-date");
        var el4 = dom.createTextNode("Released: ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","subheading");
        var el4 = dom.createTextNode("Overview");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","overview");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element1, 'src');
        morphs[1] = dom.createAttrMorph(element1, 'alt');
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [3, 1]),1,1);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [5]),1,1);
        morphs[5] = dom.createMorphAt(dom.childAt(element2, [9]),1,1);
        return morphs;
      },
      statements: [
        ["attribute","src",["concat",["https://image.tmdb.org/t/p/w300_and_h450_bestv2/",["get","model.popularMovie.poster_path",["loc",[null,[13,87],[13,117]]]]]]],
        ["attribute","alt",["concat",[["get","model.popularMovie.title",["loc",[null,[13,128],[13,152]]]]]]],
        ["content","model.popularMovie.title",["loc",[null,[16,26],[16,54]]]],
        ["content","model.popularMovie.vote_average",["loc",[null,[19,18],[19,53]]]],
        ["content","model.popularMovie.release_date",["loc",[null,[22,43],[22,78]]]],
        ["content","model.popularMovie.overview",["loc",[null,[26,10],[26,41]]]]
      ],
      locals: [],
      templates: []
    };
  }());
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
          "line": 32,
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
      dom.setAttribute(el1,"class","popular-movies-wrapper");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h2");
      dom.setAttribute(el2,"class","heading");
      var el3 = dom.createTextNode("Popular Movies");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
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
      var element3 = dom.childAt(fragment, [0]);
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(element3,3,3);
      morphs[1] = dom.createMorphAt(element3,5,5);
      return morphs;
    },
    statements: [
      ["inline","popular-movies/popular-movie-list",[],["popularMovies",["subexpr","@mut",[["get","model.popularMovies",["loc",[null,[5,18],[5,37]]]]],[],[]],"onPageChange",["subexpr","route-action",["onPageChange"],[],["loc",[null,[6,17],[6,46]]]],"onSelectPreviousPage",["subexpr","route-action",["onSelectPreviousPage"],[],["loc",[null,[7,25],[7,62]]]],"onSelectNextPage",["subexpr","route-action",["onSelectNextPage"],[],["loc",[null,[8,21],[8,54]]]],"onViewMovieDetails",["subexpr","route-action",["onViewMovieDetails"],[],["loc",[null,[9,23],[9,58]]]]],["loc",[null,[4,2],[9,60]]]],
      ["block","if",[["get","model.popularMovie.title",["loc",[null,[11,8],[11,32]]]]],[],0,null,["loc",[null,[11,2],[30,9]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));