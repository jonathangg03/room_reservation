const express = require('express')
const morgan = require('morgan')
const { server } = require('./config')
const path = require('path')
const app = express()

app.set('port', server.port)
app.set('host', server.host)

app.use(morgan('dev'))

app.use('/', express.static(path.join(__dirname, '/public')))

app.listen(app.get('port'), () =>
  console.log(`App listen on: http://${app.get('host')}:${app.get('port')}`)
)
