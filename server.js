var sys = require('sys')
var exec = require('child_process').exec
var result = []
var fs = require('fs')
var max = null
var http = require('http')


exec("rm -rf *.txt")
exec("netstat -tun |  awk '{print $4}' | awk -F':' '{print $2}' >> port.txt")

fs.readFile('port.txt',function callback(err, data){
  if (data){
    result = data.toString().split('\n').map(Number)
    result = result.filter(function(n){return n != ''})
    max = Math.max.apply(null, result)
    console.log(max)
  }
  else
    console.log("ERROR OCCURED")
})

http.createServer(function (req, res) {
      if (req.url = '/getport'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify({status:"success", data:max+1}))
        res.end()
      }
      else{
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write('Simple Simple Fun')
        res.end()
      }
}).listen(process.argv[2])
