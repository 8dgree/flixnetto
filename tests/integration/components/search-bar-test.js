import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-bar', 'Integration | Component | search bar', {
  integration: true,

  beforeEach() {
    this.setProperties({
      onSearchMovie: () => {}
    });
  }
});

test('"search-bar" component and its contents render', function(assert) {
  assert.expect(1);

  this.render(hbs`{{search-bar
                    onSearchMovie=(route-action onSearchMovie)}}`);

  // Component renders
  assert.ok(this.$());
  // Movie title input field exists
  assert.ok(this.$('#input-movie-title').length);
  // "Search" button exists
  assert.ok(this.$('#btn-search').length);
});
