define('flixnetto/tests/components/movie-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/movie-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/movie-list.js should pass jshint.');
  });
});