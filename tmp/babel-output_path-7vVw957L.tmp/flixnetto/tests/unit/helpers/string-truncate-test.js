define('flixnetto/tests/unit/helpers/string-truncate-test', ['exports', 'flixnetto/helpers/string-truncate', 'qunit'], function (exports, _flixnettoHelpersStringTruncate, _qunit) {

  (0, _qunit.module)('Unit | Helper | string truncate');

  (0, _qunit.test)('it should not truncate string', function (assert) {
    var params = {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      maxLength: 70
    };
    var truncateResult = (0, _flixnettoHelpersStringTruncate.stringTruncate)('', params);
    var result = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    assert.equal(truncateResult, result);
  });

  (0, _qunit.test)('it should truncate string', function (assert) {
    var params = {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      maxLength: 10
    };
    var truncateResult = (0, _flixnettoHelpersStringTruncate.stringTruncate)('', params);
    var result = 'Lorem ipsu...';

    assert.equal(truncateResult, result);
  });
});