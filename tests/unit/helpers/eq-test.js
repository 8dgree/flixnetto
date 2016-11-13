import { eq } from 'flixnetto/helpers/eq';
import { module, test } from 'qunit';

module('Unit | Helper | eq');

test('it works', function(assert) {
  const params = {
    first: 'test string',
    second: 'test string'
  };
  const result = eq(params);
  assert.ok(result);
});
