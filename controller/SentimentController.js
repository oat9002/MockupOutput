"use strict";
import express from 'express'
import * as sentimentService from '../service/SentimentService'

let sentimentRouter = express.Router()

sentimentRouter.route('/all').get((req, res) => {
  sentimentService.mockupOutput().then(output => {
    res.send({sentiments: output})
  })
})

export default sentimentRouter
