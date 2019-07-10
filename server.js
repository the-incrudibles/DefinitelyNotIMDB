const express = require(`express`)
const app = express()
const { join } = require(`path`)

app.use(express.static(join(__dirname, `/client`)))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require(`./routes`)(app)

require(`mongoose`).connect(`mongodb://localhost/__db`, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(3001))
  .catch(e => console.log(e))