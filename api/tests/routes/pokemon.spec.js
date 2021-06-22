/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid');


const agent = session(app);
const pokemon = {
  name: 'NewPoke'
};
const pokemon2 = {
  name: 'PokeTwo'
}

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create({...pokemon, id: uuidv4() })));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    ).timeout(10000);
  });
  describe('GET /pokemons (by name)', () => {
    it('should get 200', () =>
      agent.get('/pokemons?name=NewPoke').expect(200)
    );
  });
  describe('GET /pokemons/:id', () => {
    it('should get 200', () =>
      agent.get('/pokemons/1').expect(200)
    );
  });
  describe('GET /types', () => {
    it('should get 200', () =>
      agent.get('/types').expect(200)
    );
  });
  describe('GET /pokemon (by name)', () => {
    it('should get 404 if name doesnt exist', () =>
      agent.get('/pokemons?name=cosito').expect(404)
    );
  });
  describe('POST /pokemons', () => {
    it('should get 302 when created', () =>
      agent.post('/pokemons')
      .send(pokemon2).expect(200)
    );
  });
});