"use strict";

var _jsxAstUtils = require("jsx-ast-utils");

var _getPropValue = _interopRequireDefault(require("jsx-ast-utils/lib/getPropValue"));

var _schemas = require("../util/schemas");

var _findChild = _interopRequireDefault(require("../util/findChild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Enforce that views that have accessible={true}, also have an accessibilityLabel prop
 * @author Alex Saunders
 * 
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var errorMessage = 'If an element adopts the accessible={true} prop, it (or at least one of its children) must also set the accessibilityLabel prop';
var schema = (0, _schemas.generateObjSchema)();

function getAccessibilityLabel(node) {
  var labelProp = (0, _jsxAstUtils.getProp)(node.attributes, 'accessibilityLabel');

  if (labelProp && labelProp.value) {
    return (0, _getPropValue.default)(labelProp);
  }

  return null;
}

module.exports = {
  meta: {
    docs: {},
    schema: [schema]
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var accessible = (0, _jsxAstUtils.getProp)(node.attributes, 'accessible');
        if (!accessible || accessible.value && accessible.value.expression.value === false) return;
        var labelPropVal = getAccessibilityLabel(node);

        if (!labelPropVal) {
          var childWithLabel; // $FlowFixMe

          if (node.parent) {
            childWithLabel = (0, _findChild.default)(node.parent, function (child) {
              if (child.attributes) {
                var childLabelValue = getAccessibilityLabel(child);
                return !!childLabelValue;
              }

              return false;
            });
          }

          if (!childWithLabel) {
            context.report({
              node,
              message: errorMessage
            });
          }
        }
      }
    };
  }
};