if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  server: {
    port: process.env.SRV_PORT,
    host: process.env.SRV_HOST
  }
}
