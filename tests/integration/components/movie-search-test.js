import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('movie-search', 'Integration | Component | movie search', {
  integration: true,

  beforeEach() {
    this.setProperties({
      isShowPopularMovies: false,
      movieSearchResults: {
        "page":1,
        "results":[
          {
            "id":21067,
            "logo_path":null,
            "name":"Arrival Pictures"
          },
          {
            "id":7130,
            "logo_path":null,
            "name":"Dead On Arrival Digital"
          }
        ],
        "total_pages":1,
        "total_results":2
      },
      onBackToPopularMovies: () => {},
      onSearchMovie: () => {}
    });
  }
});

test('"movie-search" and its contents render', function(assert) {
  assert.expect(4);

  this.render(hbs`{{movie-search
                    isShowPopularMovies=isShowPopularMovies
                    movieSearchResults=movieSearchResults
                    onBackToPopularMovies=(route-action onBackToPopularMovies)
                    onSearchMovie=(route-action onSearchMovie)}}`);

  // Component renders
  assert.ok(this.$());
  // Search bar exists
  assert.ok(this.$('.search-bar').length);
  // "Search Results" heading exists
  assert.equal(this.$('.movies-list-wrapper .heading').text().trim(), 'Search Results');
  // Movie list exists
  assert.ok(this.$('.movie-list').length);
});
