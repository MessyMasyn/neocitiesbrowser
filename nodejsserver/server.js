
var host = '192.168.0.146'
// Listen on a specific port via the PORT environment variable
var port = 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: []/*
    , // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
    */
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
