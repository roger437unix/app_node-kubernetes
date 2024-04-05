const express = require('express')
const app = express()
const port = 8080
const IP = require('ip');

app.get('/', (req, res) => {
    const ipAddress = IP.address();
    res.send('<h1 style="text-align:center;color:#329916">'+ipAddress+'</h1>')
})

app.listen(port, () => {
  console.log(`\nApp Node IPv4 listening on port ${port}`)
  console.log(`\nhttp://localhost:${port}`)
})
