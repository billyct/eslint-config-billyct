const eslint = require('eslint')
const path = require('path')

test('load config in eslint to validate all rule syntax is correct', () => {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: path.resolve(__dirname, '../index.js')
  })

  const code = `const foo = ['foo']
const bar = {
  foo: 'foo',
  bar: 'bar',
}

const foobar = () => false
foobar(foo, bar)
`

  expect(cli.executeOnText(code).errorCount).toBe(0)
})
