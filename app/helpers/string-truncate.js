import Ember from 'ember';

export function stringTruncate(_, { content = '', maxLength = 20, suffix = '...' }) {
  let length = content.length;

  if (length > maxLength) {
    return content.substr(0, maxLength) + suffix;
  } else {
    return content;
  }
}

export default Ember.Helper.helper(stringTruncate);
