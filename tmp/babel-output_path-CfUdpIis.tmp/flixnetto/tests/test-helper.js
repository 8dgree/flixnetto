define('flixnetto/tests/test-helper', ['exports', 'flixnetto/tests/helpers/resolver', 'ember-qunit'], function (exports, _flixnettoTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_flixnettoTestsHelpersResolver['default']);
});