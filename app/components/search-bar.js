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
    /**
     * Gets the search keyword(s) provided and bubbles this information up to
     * "index" route for further handling.
     * @method onSearchMovie
     * @param  {String} searchTitle - Search title
     * @return {undefined}
     */
    onSearchMovie(searchTitle) {
      this.attrs.onSearchMovie(searchTitle);
    }
  }
});
