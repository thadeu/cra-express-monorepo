import express from 'express'
import setupApp from './setup'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import api from './api'

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
)

app.use('/api', api)

export default app
