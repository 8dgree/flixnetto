define('flixnetto/tests/components/movie-search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/movie-search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/movie-search.js should pass jshint.');
  });
});