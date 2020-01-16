/**
 * @fileoverview Enforce if a view has accessible={true}, that there are no clickable elements inside
 * @author Alex Saunders
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

import { elementType, getProp, getPropValue } from 'jsx-ast-utils';
import { generateObjSchema } from '../util/schemas';
import isTouchable from '../util/isTouchable';
import findChild from '../util/findChild';

const errorMessage =
  'Only Single React Child expected, please wrap in sth like View or Fragment';

const schema = generateObjSchema();

module.exports = {
  meta: {
    docs: {},
    schema: [schema]
  },

  create: context => ({
    JSXOpeningElement: node => {
      function countOpeningTags(node) {
        const { parent } = node;
        const { children } = parent;
        let count = 0;
        if (children && children.length > 0) {
          for (let i = 0; i < children.length; i += 1) {
            // $FlowFixMe
            const _child = children[i];

            if (_child.openingElement) {
              count++;
            }
          }
        }
        return count;
      }

      if (isTouchable(node, context) && countOpeningTags(node) > 1) {
        context.report({
          node,
          message: errorMessage
        });
      }
    }
  })
};
