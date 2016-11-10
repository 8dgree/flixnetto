define('flixnetto/tests/routes/popular-movies.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/popular-movies.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/popular-movies.js should pass jshint.');
  });
});