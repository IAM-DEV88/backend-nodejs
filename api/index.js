const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const { errorHandler, logErrors, boomErrorHandler }  = require('./middlewares/error.handler')
const app  = express()
const port = process.env.PORT || 3000

app.use(express.json())

// reduce posibilidad de ataques
const whiteList=['http://localhost:8080','https://myapp.com']
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('No permitido'))
    }
  }
}
// Habilita cualquier origen
app.use(cors(options))

routerApi(app)

app.get('/api', (req, res) => {
  res.send('Servidor ejecutado')
})

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () =>{
  console.log('Puerto: ', port);
})

