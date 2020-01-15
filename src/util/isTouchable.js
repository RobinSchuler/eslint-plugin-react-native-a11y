/**
 * Returns boolean indicating whether a JSXOpeningElement
 * is a <Touchable*> element
 * @flow
 */

import type { JSXOpeningElement } from 'ast-types-flow';
import { elementType } from 'jsx-ast-utils';
import type { ESLintContext } from '../../flow/eslint';

const defaultTouchables = {
  Touchable: false,
  TouchableOpacity: false,
  TouchableHighlight: true,
  TouchableWithoutFeedback: true,
  TouchableNativeFeedback: true,
  TouchableBounce: false
};

export default function isTouchable(
  element: JSXOpeningElement,
  context: ESLintContext = {
    id: '',
    options: [],
    report: () => {}
  }
) {
  const { options } = context;
  let extraTouchables = [];
  if (
    options[0] &&
    Object.prototype.hasOwnProperty.call(options[0], 'touchables')
  ) {
    const { touchables } = options[0];
    touchables.forEach(touchable => {
      if (!touchable.includes('Touchable')) {
        throw Error(
          `Custom touchable specified in ${context.id} does not incloude 'Touchable'`
        );
      }
    });
    extraTouchables = [...touchables];
  }

  const elType = elementType(element);
  return defaultTouchables[elType] || extraTouchables.includes(elType);
}
