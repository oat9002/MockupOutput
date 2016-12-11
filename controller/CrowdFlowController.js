"use strict";
import express from 'express'
import * as crowdFlowService from '../service/CrowdFlowService'

let crowdFlowRouter = express.Router()

crowdFlowRouter.route('/current/density').get((req, res) => {
  crowdFlowService.getCurrentDensity(req.location).then(output => {
    res.send({crowdflow: output})
  })
})

crowdFlowRouter.route('/predict/changingDensity').get((req, res) => {
  crowdFlowService.getChaningDensity(req.location).then(output => {
    res.send({crowdflow: output})
  })
})

crowdFlowRouter.route('/predict/nextPlace').get((req, res) => {
  crowdFlowService.getNextPlace(req.location).then(output => {
    res.send({crowdflow: output})
  })
})

export default crowdFlowRouter
