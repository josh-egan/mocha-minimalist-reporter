# mocha-minimalist-reporter
A minimalist reporter for mocha. Inspired by the [min](https://github.com/mochajs/mocha/blob/master/lib/reporters/min.js) reporter that is shipped with mocha. This reporter __does not__ clear the console.

## Usage

In your `package.json` file:

```json
"scripts": {
  "test": "./node_modules/.bin/mocha --reporter mocha-minimalist-reporter ./**/*.specs.js"
}
```

## Output

```
running tests...

1 passing (13 ms)
2 pending
1 failing

1) when running a failing test should fail:
AssertionError: expected false to be true
```
