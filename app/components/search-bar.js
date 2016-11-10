import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * List of classes for the component.
   */
  classNames: ['search-bar'],

  /**
   * Component's tag name element.
   */
  tagName: 'section',

  /**
   * Defined actions for component.
   */
  actions: {
    onSearchMovie(movieTitle) {
      this.attrs.onSearchMovie(movieTitle);
    }
  }
});
