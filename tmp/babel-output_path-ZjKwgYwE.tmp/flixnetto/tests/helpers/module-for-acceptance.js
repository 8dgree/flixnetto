define('flixnetto/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'flixnetto/tests/helpers/start-app', 'flixnetto/tests/helpers/destroy-app'], function (exports, _qunit, _flixnettoTestsHelpersStartApp, _flixnettoTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _flixnettoTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _flixnettoTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});