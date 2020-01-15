'use strict';

var _jsxAstUtils = require('jsx-ast-utils');

var _schemas = require('../util/schemas');

var _isTouchable = _interopRequireDefault(require('../util/isTouchable'));

var _findChild = _interopRequireDefault(require('../util/findChild'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @fileoverview Enforce if a view has accessible={true}, that there are no clickable elements inside
 * @author Alex Saunders
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var errorMessage =
  'Only Single React Child expected, please wrap in sth like View or Fragment';
var schema = (0, _schemas.generateObjSchema)();
module.exports = {
  meta: {
    docs: {},
    schema: [schema]
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        function countOpeningTags(element) {
          var parent = element.parent;
          var children = parent.children;
          var count = 0;
          if (children && children.length > 0) {
            for (var i = 0; i < children.length; i += 1) {
              // $FlowFixMe
              var _child = children[i];

              if (_child.openingElement) {
                count++;
              }
            }
          }
          return count;
        }

        //if ((0, _isTouchable.default)(node, context) && children &&!(children.length === 1)) {
        if (
          (0, _isTouchable.default)(node, context) &&
          countOpeningTags(node) !== 1
        ) {
          context.report({
            node,
            message: errorMessage
          });
        }

        //  }
      }
    };
  }
};

//.children +" CHILD " + children + " first child " + children[0].parent === children[1].parent + " & " +children[0].parent === children[2].parent +" parent " + parent
