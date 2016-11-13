define('flixnetto/tests/unit/helpers/eq-test', ['exports', 'flixnetto/helpers/eq', 'qunit'], function (exports, _flixnettoHelpersEq, _qunit) {

  (0, _qunit.module)('Unit | Helper | eq');

  (0, _qunit.test)('it works', function (assert) {
    var params = {
      first: 'test string',
      second: 'test string'
    };
    var result = (0, _flixnettoHelpersEq.eq)(params);
    assert.ok(result);
  });
});