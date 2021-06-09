import axios from 'axios';

export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMONBYNAME = 'GET_POKEMONBYNAME';
export const GET_POKEMONBYID = 'GET_POKEMONBYID';

export function getPokemon() {
  return function(dispatch) {
    return axios.get('http://localhost:3001/pokemons')
      .then(response => {
        dispatch({
          type: GET_POKEMON,
          payload: response.data
        })
      })
  }
}

export function getPokemonByName(name) {
  return function(dispatch) {
    return axios.get('http://localhost:3001/pokemons/' + name)
      .then(response => {
        dispatch({
          type: GET_POKEMONBYNAME,
          payload: response.data
        })
      })
  }
}

export function getPokemonById(id) {
  return function(dispatch) {
    return axios.get('http://localhost:3001/pokemons/' + id)
      .then(response => {
        dispatch({
          type: GET_POKEMONBYID,
          payload: response.data
        })
      })
  }
}