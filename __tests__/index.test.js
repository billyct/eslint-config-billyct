const {ESLint} = require('eslint')
const path = require('path')

test('load config in eslint to validate all rule syntax is correct', async () => {

  const cli = new ESLint({
    useEslintrc: false,
    overrideConfigFile: path.resolve(__dirname, '../index.js')
  })

  const code = `const foo = ['foo']
const bar = {
  foo: 'foo',
  bar: 'bar',
}

const foobar = () => false
foobar(foo, bar)

const testFn = async () => false
testFn()
function fn() {}
fn()
class Foo {
  constructor() {
    this.foo = 'test'
  }
}
const f = new Foo()
console.log(f.foo)
`

  const results = await cli.lintText(code)

  expect(results[0].errorCount).toBe(0)
})
