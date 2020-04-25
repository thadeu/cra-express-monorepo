import express from 'express'
import ContactController from '@api/v1/contacts/controller'

const router = express.Router()

/**
 * @api GET /contacts
 * Get All Contacts
 */
router.get('/', ContactController.index)
router.post('/', ContactController.create)

export default router
