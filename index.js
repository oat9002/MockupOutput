"use strict"
import express from 'express'
import bodyParser from 'body-parser'
import sentimentRouter from './controller/SentimentController'
import crowdFlowRouter from './controller/CrowdFlowController'
import cors from 'cors'
import swagger from 'swagger-node-express'
import { applicationUrl, swaggerPath } from './swagger'

//Port
const port = process.env.port || 7900
let app = express()

//enable cors
app.use(cors())

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//parent url
app.route('/').get((req, res) => {
  res.send('<h1>Output(Mockup)</h1>')
})

app.use('/sentiment', sentimentRouter)

app.use('/crowdFlow', crowdFlowRouter)

//Swagger
app.use('/swagger', swaggerPath)
swagger.setAppHandler(swaggerPath)
app.use(express.static(__dirname + '/dist'))
swagger.setApiInfo({
  title: "Mockup API",
  description: "API which provides Mockup data",
  termsOfServiceUrl: "",
  contact: "yourname@something.com",
  license: "",
  licenseUrl: ""
})
swagger.configureSwaggerPaths('', 'api-docs', '')
swagger.configure(applicationUrl, '1.0.0')

//service start
app.listen(port, () => {
  console.log('Starting node.js on port ' + port)
});
