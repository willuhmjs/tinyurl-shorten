# tinyurl-shorten
An error-resistant module to shorten a URL using [TinyURL](https://www.tinyurl.com).

[![NPM](https://nodei.co/npm/tinyurl-shorten.png)](https://nodei.co/npm/tinyurl-shorten/)

## Installation
```
npm install tinyurl-shorten
```

## Usage
```
const tinyurl = require("tinyurl-shorten");

;(async () => {
  // https://tinyurl.com/...
  await tinyurl(url, alias?);
})();
```

## License
**tinyurl-shorten** is licensed under the [Apache License 2.0](https://github.com/willuhm-js/tinyurl-shorten/blob/main/LICENSE)