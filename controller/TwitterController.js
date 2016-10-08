"use strict";
import express from 'express'
import * as TwitterService from '../service/TwitterService'

let twitterRouter = express.Router()

twitterRouter.route('/all').get((req, res) => {
  TwitterService.mockupOutput().then(output => {
    res.send({sentiments: output})
  })
})

export default twitterRouter
