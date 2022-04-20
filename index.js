const http = require('http')

const OPTIONS = {
  host: 'localhost',
  port: '9090',
  path: '/',
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  }
}

module.exports = function(options) {
  options = { ...OPTIONS, ...options }

  // Set up headers
  if (!options.headers) {
    options.headers = {}
  }

  // Extract params
  let params = options.params || {}
  delete options.params
  if (typeof params == 'object') {
    params = JSON.stringify(params)
    options.headers['content-length'] = Buffer.byteLength(params)
  }

  function request(resolve, reject) {
    function query(res) {
      let data = ''
      res.on('data', function(chunk) {
        data += chunk
      })

      res.on('close', function() {
        const type = res.headers['content-type']
        if (type && type.startsWith('application/json')) {
          try {
            data = JSON.parse(data)
          } catch(e) {
            data = {}
          }
        }
        const code = res.statusCode
        resolve({ res, code, data })
      })
    }

    const req = http.request(options, query)
    req.on('error', reject)

    // Write params and send
    req.end(params)
  }

  return new Promise(request)
}
