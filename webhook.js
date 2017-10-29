var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhook', secret: 'shijin821' })
const spawn = require('child_process').spawn;

http.createServer( (req, res)=> {

}).listen(7777)

handler.on('push', (event)=> {
    spawn('sh', ['./auto_build']);
})


