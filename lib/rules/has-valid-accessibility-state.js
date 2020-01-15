"use strict";

var _validProp = _interopRequireDefault(require("../factory/valid-prop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Used to tell Talkback or Voiceover the state a UI Element is in
 * @author Jen Luker
 * 
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var errorMessage = 'accessibilityStates must be one or both of the defined values';
var validValues = ['selected', 'disabled'];
var deprecationHasBeenWarned = false;
var rule = (0, _validProp.default)('accessibilityStates', validValues, errorMessage, {
  deprecated: true
}, {
  Program: function Program() {
    if (deprecationHasBeenWarned) return; // eslint-disable-next-line no-console

    console.log('The react-native-a11y/has-valid-accessibility-state rule is deprecated. ' + 'Please use the react-native-a11y/has-valid-accessibility-states rule instead.');
    deprecationHasBeenWarned = true;
  }
});
module.exports = rule;