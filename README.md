# Spett HTTP Client

Thin HTTP Client.

Automatically converts JSON data to objects if the content type is `application/json`.

### Install
```
npm i spett
```

### Usage
```js
const request = require('spett')

// Default options
const options = {
  host: 'localhost',
  port: '9090',
  path: '/',
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  }
}

// The data, the status code and the response object
const { data, code, res } = await request({ path: '/hello'})
```

ISC Licensed. Enjoy!
