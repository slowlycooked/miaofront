var express = require('express');
var proxy = require('http-proxy-middleware');

// proxy middleware options
var options = {
  target: 'http://www.ifiport.com:8080/api', // target host
  changeOrigin: true,               // needed for virtual hosted sites
  ws: true,                         // proxy websockets
  pathRewrite: {
    '^/api' : ''     // rewrite path
  }
};

// create the proxy (without context)
var ifiportProxy = proxy(options);

// mount `exampleProxy` in web server
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname));

var port = 3000
app.use('/api', ifiportProxy);
app.listen(port);
console.log('server started '+ port);
