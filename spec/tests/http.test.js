const assert = require('assert')
const request = require('../../index.js')

const it = {}

it['should do requests'] = async function() {
  const { data, code } = await request({
    port: 9080
  })
  assert.deepEqual(code, 200)
  assert.deepEqual(data.hello, 'root')
}

it['should do requests with path'] = async function() {
  const { data, code } = await request({
    port: 9080,
    path: '/hello'
  })
  assert.deepEqual(code, 200)
  assert.deepEqual(data.hello, 'world')
}

it['should do requests with params'] = async function() {
  const { data, code } = await request({
    port: 9080,
    path: '/params',
    params: {
      hello: 'params'
    }
  })
  assert.deepEqual(code, 200)
  assert.deepEqual(data.hello, 'params')
}

module.exports = it
