import { stringTruncate } from 'flixnetto/helpers/string-truncate';
import { module, test } from 'qunit';

module('Unit | Helper | string truncate');

test('it should not truncate string', function(assert) {
  const params = {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    maxLength: 70
  };
  const truncateResult = stringTruncate('', params);
  const result = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  assert.equal(truncateResult, result);
});

test('it should truncate string', function(assert) {
  const params = {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    maxLength: 10
  };
  const truncateResult = stringTruncate('', params);
  const result = 'Lorem ipsu...';

  assert.equal(truncateResult, result);
});
