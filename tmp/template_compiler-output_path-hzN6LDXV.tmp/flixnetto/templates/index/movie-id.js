export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 4
          },
          "end": {
            "line": 5,
            "column": 4
          }
        },
        "moduleName": "flixnetto/templates/index/movie-id.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"class","movie-poster");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        morphs[1] = dom.createAttrMorph(element0, 'alt');
        return morphs;
      },
      statements: [
        ["attribute","src",["concat",["https://image.tmdb.org/t/p/w300_and_h450_bestv2/",["get","model.movieInfo.poster_path",["loc",[null,[4,87],[4,114]]]]]]],
        ["attribute","alt",["concat",[["get","model.popularMovie.title",["loc",[null,[4,125],[4,149]]]]]]]
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
            "line": 5,
            "column": 4
          },
          "end": {
            "line": 7,
            "column": 4
          }
        },
        "moduleName": "flixnetto/templates/index/movie-id.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"class","movie-poster");
        dom.setAttribute(el1,"src","http://www.hutchinsontires.com/helpers/img/no_image.jpg");
        dom.setAttribute(el1,"alt","No movie poster");
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
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 20,
            "column": 8
          },
          "end": {
            "line": 22,
            "column": 8
          }
        },
        "moduleName": "flixnetto/templates/index/movie-id.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("          ");
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
        ["content","model.movieInfo.overview",["loc",[null,[21,10],[21,38]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 22,
            "column": 8
          },
          "end": {
            "line": 24,
            "column": 8
          }
        },
        "moduleName": "flixnetto/templates/index/movie-id.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("          No description available\n");
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
          "line": 33,
          "column": 0
        }
      },
      "moduleName": "flixnetto/templates/index/movie-id.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","movie-details-wrapper");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","movie-details-inner-wrapper");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","movie-details");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h3");
      dom.setAttribute(el4,"class","title");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("aside");
      dom.setAttribute(el4,"class","rating");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      var el6 = dom.createTextNode("☆ ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h5");
      dom.setAttribute(el4,"class","release-date");
      var el5 = dom.createTextNode("Released: ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h4");
      dom.setAttribute(el4,"class","subheading");
      var el5 = dom.createTextNode("Overview");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      dom.setAttribute(el4,"class","overview");
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element1 = dom.childAt(fragment, [0]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element2, [3]);
      var morphs = new Array(6);
      morphs[0] = dom.createMorphAt(element2,1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
      morphs[2] = dom.createMorphAt(dom.childAt(element3, [3, 1]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element3, [5]),1,1);
      morphs[4] = dom.createMorphAt(dom.childAt(element3, [9]),1,1);
      morphs[5] = dom.createMorphAt(element1,3,3);
      return morphs;
    },
    statements: [
      ["block","if",[["get","model.movieInfo.poster_path",["loc",[null,[3,10],[3,37]]]]],[],0,1,["loc",[null,[3,4],[7,11]]]],
      ["content","model.movieInfo.title",["loc",[null,[10,24],[10,49]]]],
      ["content","model.movieInfo.vote_average",["loc",[null,[13,16],[13,48]]]],
      ["content","model.movieInfo.release_date",["loc",[null,[16,41],[16,73]]]],
      ["block","if",[["get","model.movieInfo.overview",["loc",[null,[20,14],[20,38]]]]],[],2,3,["loc",[null,[20,8],[24,15]]]],
      ["inline","similar-movies",[],["similarMovies",["subexpr","@mut",[["get","model.similarMovies",["loc",[null,[30,18],[30,37]]]]],[],[]]],["loc",[null,[29,2],[30,39]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3]
  };
}()));