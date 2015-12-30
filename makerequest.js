var http = require('http')
var sys = require('sys')
var exec = require('child_process').exec
var str = null
var command = null

var options = {
  host: process.argv[2],
  path: '/getport',
  port: process.argv[3],
  method: 'GET',
  headers: {'Content-Type' :'application/json'}
}

callback = function(response) {
  response.on('data', function (chunk) {
    str = JSON.parse(chunk.toString())
    console.log("You can access your local app using " + process.argv[2] + ":" + str.data)
    command = "ssh -N -R :" + str.data + ":localhost:" + process.argv[4] +  " root@" + process.argv[2]
    exec(command)
  })
}

http.get(options, callback)

