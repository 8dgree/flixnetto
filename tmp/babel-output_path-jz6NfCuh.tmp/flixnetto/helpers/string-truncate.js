define('flixnetto/helpers/string-truncate', ['exports', 'ember'], function (exports, _ember) {
  exports.stringTruncate = stringTruncate;

  function stringTruncate(_, _ref) {
    var _ref$content = _ref.content;
    var content = _ref$content === undefined ? '' : _ref$content;
    var _ref$maxLength = _ref.maxLength;
    var maxLength = _ref$maxLength === undefined ? 20 : _ref$maxLength;
    var _ref$suffix = _ref.suffix;
    var suffix = _ref$suffix === undefined ? '...' : _ref$suffix;

    var length = content.length;

    if (length > maxLength) {
      return content.substr(0, maxLength) + suffix;
    } else {
      return content;
    }
  }

  exports['default'] = _ember['default'].Helper.helper(stringTruncate);
});