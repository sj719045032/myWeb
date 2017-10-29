var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhook', secret: 'shijin821' })
const spawn = require('child_process').spawn;

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(7777)

handler.on('error', function (err) {
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)
     const sh= spawn('sh', ['./auto_build']);
    sh.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    sh.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    sh.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
})


