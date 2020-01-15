"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTouchable;

var _jsxAstUtils = require("jsx-ast-utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultTouchables = {
  Touchable: false,
  TouchableOpacity: false,
  TouchableHighlight: true,
  TouchableWithoutFeedback: true,
  TouchableNativeFeedback: true,
  TouchableBounce: false
};

function isTouchable(element) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    id: '',
    options: [],
    report: function report() {}
  };
  var options = context.options;
  var extraTouchables = [];

  if (options[0] && Object.prototype.hasOwnProperty.call(options[0], 'touchables')) {
    var touchables = options[0].touchables;
    if (!touchable.includes('Touchable')) {
      throw Error(
        `Custom touchable specified in ${context.id} does not incloude 'Touchable'`
      );
    }
    extraTouchables = _toConsumableArray(touchables);
  }

  var elType = (0, _jsxAstUtils.elementType)(element);
  return defaultTouchables[elType] || extraTouchables.includes(elType);
}
