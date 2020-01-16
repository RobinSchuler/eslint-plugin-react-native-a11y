# eslint-plugin-invariant-violation

checkin single child children in touchables

## Installation

Install [ESLint](http://eslint.org):

```sh
# npm
npm install eslint --save-dev

# yarn
yarn add eslint --dev
```

Next, install `eslint-plugin-invariant-violation`:

```sh
# npm
npm install eslint-plugin-invariant-violation --save-dev

# yarn
yarn add eslint-plugin-invariant-violation --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag in npm, or the `global` prefix in yarn) then you must also install `eslint-plugin-invariant-violation` globally.

## Usage

Add `invariant-violation` to the plugins section of your `.eslintrc` configuration file.

```json
{
  "plugins": ["invariant-violation"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "invariant-violation/rule-name": 2
  }
}
```

Alternatively, you can enable all the recommended rules at once by adding `plugin:invariant-violation/recommended` to the `extends` section of your `.eslintrc` configuration file:

```js
{
  "extends": [
    "plugin:invariant-violation/recommended"
  ]
}
```

## Supported Rules

- [no-invariant-violation](docs/rules/no-invariant-violation.md): Enforce single child in touchable

### Rule Options

The following options are available to customize the recommended rule set.

#### Custom Touchables

`invariant-violation/no-invariant-violation` allows you to define an array of names for custom components that you may have that conform to the same accessibility interfaces as Touchables. Each of these names must include 'Touchable'.

```js
"invariant-violation/no-invariant-violation": [
  "error",
  {
    "touchables": ["TouchableCustom"]
  }
]
```

## Creating a new rule

If you are developing new rules for this project, you can use the `create-rule`
script to scaffold the new files.

```
$ ./scripts/create-rule.js my-new-rule
```

## Attribution

This project started as a fork of [eslint-plugin-react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y)

## License

eslint-plugin-invariant-violation is licensed under the [MIT License](LICENSE.md).
