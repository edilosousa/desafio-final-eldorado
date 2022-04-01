const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

const db = require('./api/models')
db.sequelize.sync()

require('./api/routes/device.route')(app)
require('./api/routes/category.route')(app)

app.listen(port, () => {
    console.log(`App listen in port ${port}`)
})