/* eslint-env jest */
/**
 * @fileoverview Enforce if a view has accessible={true}, that there are no clickable elements inside
 * @author Robin Schuler
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import rule from '../../../src/rules/no-invariant-violation';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message:
    'Only Single React Child expected, please wrap in sth like View or Fragment',
  type: 'JSXOpeningElement'
};

ruleTester.run('no-invariant-violation', rule, {
  valid: [
    {
      code: `<TouchableWithoutFeedback
      accessibilityTraits="button"
      accessibilityComponentType="button"
      accessibilityLabel="Tap Me!"
      accessible={true}
    />`
    },
    {
      code: `<TouchableWithoutFeedback
      accessibilityTraits="button"
      accessibilityComponentType="button"
      accessibilityLabel="Tap Me!"
      accessible={true}
    ><View><Text>submit</Text><View><Text>cancel</Text></View></View></TouchableWithoutFeedback>`
    }
  ].map(parserOptionsMapper),
  invalid: [
    {
      code: `<TouchableWithoutFeedback
                accessibilityTraits="button"
                accessibilityComponentType="button"
                accessibilityLabel="Tap Me!"
                accessible={true}
              >
                <Button />
                <View/>
              </TouchableWithoutFeedback>`,
      errors: [expectedError]
    }
  ].map(parserOptionsMapper)
});
