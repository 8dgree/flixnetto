define('flixnetto/components/popular-movies', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    /**
     * List of classes for the component.
     */
    classNames: ['popular-movies'],

    /**
     * Component's tag name element.
     */
    tagName: 'section'
  });
});