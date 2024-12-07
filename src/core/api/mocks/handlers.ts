// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
import { API } from '../'

export const handlers = [
  http.post(`${API.inquiry}/submit`, () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]