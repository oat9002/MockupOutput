"use strict";
import express from 'express'
import * as TwitterService from '../service/TwitterService'

let twitterRouter = express.Router()

twitterRouter.route('/output').get((req, res) => {
  TwitterService.mockupOutput().then(output => {
    res.send(output)
  })
})

export default twitterRouter
