import express from 'express'
import contacts from '@api/v1/contacts'

const app = express()

app.use('/contacts', contacts.routes)

export default app
