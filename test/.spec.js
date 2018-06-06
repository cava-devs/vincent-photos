const request = require('supertest');
const server = require('../server/server');
const db = require('../db/index');


describe('Test the root path response and content delivery', () => {
  test('It should respond 200 on a GET', () => {
    return request(server).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    })
    .catch(err => console.log(err));
  });

  test('It should serve static html on initial GET', () => {
    return request(server).get('/').then(response => {
      expect(response.text.includes('<!DOCTYPE html>')).toBe(true);
    })
    .catch(err => console.log(err));
  });
});

describe('Test the /photos path response and content delivery', () => {
  test('It should respond 200 on a GET', () => {
    db.getPhotos = jest.fn((restaurantID, dataSend) => dataSend(null, true));
    return request(server).get('/restaurant/1001/photos').then(response => {
      expect(response.statusCode).toBe(200);
    })
    .then(() => {
      expect(db.getPhotos.mock.calls).toHaveLength(1);
      expect(db.getPhotos.mock.calls[0][0]).toBe(1001);
      expect(typeof db.getPhotos.mock.calls[0][1]).toBe('function');
    })
    .catch(err => console.log(err));
  });

  test('It should return a json object with url properties', () => {
    db.getPhotos = jest.fn((restaurantID, dataSend) => dataSend(null, [{}]));
    return request(server).get('/restaurant/1001/photos')
    .expect('Content-Type', /json/)
    .then(response => {
      expect(response.body).toHaveLength(1);
      expect(Array.isArray(response.body)).toBe(true);
    })
    .catch(err => console.log(err));
  });
});
