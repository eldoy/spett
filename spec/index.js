const http = require('http')
const test = require('spekky')
const bparse = require('bparse')

async function run() {
  const server = http.createServer()
  server.on('request', async function(req, res) {
    await bparse(req)

    let data = '{}'

    if (req.url == '/') {
      data = { hello: 'root' }

    } else if (req.url == '/hello') {
      data = { hello: 'world' }

    } else if (req.url == '/params') {
      data = { hello: req.params.hello }
    }

    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify(data))
  })
  server.listen(9080)

  console.time('Test run')
  await test('http')
  console.timeEnd('Test run')
}
run()
