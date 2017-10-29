var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({path: '/webhook', secret: 'shijin821'})
const spawn = require('child_process').spawn;

http.createServer((req, res) => {
    handler(req, res, err => {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(7777)

handler.on('error', err => {
    console.error('Error:', err.message)
})

handler.on('push', event => {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)
    spawn('sh', ['./auto_build.sh']);
})


