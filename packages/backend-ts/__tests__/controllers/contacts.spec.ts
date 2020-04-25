import request from 'supertest'

import { MongooseSetup } from '../test-setup'
import app from '../../src/app'
import Contact from '@schemas/Contact'

describe('GET /contacts', () => {
  MongooseSetup(Contact)

  it('should be return all contacts', async () => {
    await Contact.create({ email: 'contact-1', tags: [] })
    const { body, status } = await request(app).get('/api/contacts')

    expect(status).toBe(200)

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'contact-1'
        })
      ])
    )
  })
})