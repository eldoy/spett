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

// The data, the status code and the response object
const { data, code, res } = await request({ path: '/hello'})



// Default options
const options = {
  host: 'localhost',
  port: '9090',
  path: '/',
  method: 'POST',
  // Example for headers:
  // headers: {
  //   'accept': 'application/json'
  // }
}
```

ISC Licensed. Enjoy!