console.log('inicia backend-nodejs');
const express = require('express')
const routerApi = require('./routes')

const app  = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Servidor ejecutado')
})

routerApi(app)

app.listen(port, () =>{
  console.log('Puerto: ', port);
})

