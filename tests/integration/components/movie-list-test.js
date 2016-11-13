import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('movie-list', 'Integration | Component | movie list', {
  integration: true,

  beforeEach() {
    this.setProperties({
      isShowPopularMovies: false,
      searchTitle: 'arrival',
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
      onPageChange: () => {},
      onSelectPreviousPage: () => {},
      onSelectNextPage: () => {}
    });
  }
});

test('"movie-list" component and its contents render', function(assert) {
  assert.expect(4);

  this.render(hbs`{{movie-list
                    movies=movieSearchResults
                    searchTitle=searchTitle
                    type="search"
                    onBackToPopularMovies=(route-action onBackToPopularMovies)
                    onPageChange=(route-action onPageChange)
                    onSelectPreviousPage=(route-action onSelectPreviousPage)
                    onSelectNextPage=(route-action onSelectNextPage)}}`);

  // Component renders
  assert.ok(this.$());
  // Pagination exists
  assert.ok(this.$('.paging').length);
  // Sorting exists
  assert.ok(this.$('.frm-sort').length);
  // Movie list exists
  assert.ok(this.$('.movie-list .list').length);
});
