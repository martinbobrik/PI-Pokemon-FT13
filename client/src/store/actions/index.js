import axios from 'axios';

export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMONBYNAME = 'GET_POKEMONBYNAME';
export const GET_POKEMONBYID = 'GET_POKEMONBYID';
export const SHOW_STATE = 'SHOW_STATE';
export const LOADED = 'LOADED';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_BY_CREATOR = 'FILTER_BY_CREATOR';
export const FILTER_BY_ORDER = 'FILTER_BY_ORDER';
export const CREATE_POKEMON = 'CREATE_POKEMON';
const BASEURL_API = 'http://localhost:3001/'; //'http://64.227.30.49/';

export function getPokemon() {
  return function(dispatch) {
    return axios.get(`${BASEURL_API}pokemons/`)
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
    return axios.get(`${BASEURL_API}pokemons?name=${name}`)
      .then(response => {
        dispatch({
          type: GET_POKEMONBYNAME,
          payload: response.data
        })
      })
      .catch(error => dispatch({
        type: GET_POKEMONBYNAME,
        payload: error.name
      }))
  }
}

export function getPokemonById(id) {
  return function(dispatch) {
    return axios.get(`${BASEURL_API}pokemons/${id}`)
      .then(response => {
        dispatch({
          type: GET_POKEMONBYID,
          payload: response.data
        })
      })
  }
}

export function getTypes() {
  return function(dispatch) {
    return axios.get(`${BASEURL_API}types`)
      .then(response => {
        dispatch({
          type: GET_TYPES,
          payload: response.data
        })
      })
  }
}
export function createPokemon(body, types) {
  return function(dispatch) {
    return axios({
        method: 'post',
        url: `${BASEURL_API}pokemons/`,
        data: body
      })
      .then(response => {
        // console.log('la respuestaaaa ', response)
        axios({
            method: 'post',
            url: `${BASEURL_API}pokemons/types`,
            data: {
              'pokemonId': response.data.id,
              'typeIds': types
            }
          })
          .then((response) =>
            dispatch({
              type: CREATE_POKEMON,
              payload: response.data
            })
          )
      })
  }
}

export function showState(show) {
  return function(dispatch) {
    return dispatch({
      type: SHOW_STATE,
      payload: show
    })
  }
}
export function loaded() {
  return function(dispatch) {
    return dispatch({
      type: LOADED
    })
  }
}

export function filterByType(pokemonList, type) {
  function searchTypes(t) {
    let found = false;
    t.forEach(t => t.name === type ? found = true : null);
    return found;
  }
  const pokemonFilteredByType = pokemonList.filter(p => searchTypes(p.types))

  return function(dispatch) {
    return dispatch({
      type: FILTER_BY_TYPE,
      payload: pokemonFilteredByType
    })
  }

}
export function filterByCreator(pokemonList, creator) {
  let pokemonFilteredByCreator = []
  if (creator === 'DB') {
    pokemonFilteredByCreator = pokemonList.filter(p => p.id.toString().length > 10)
  } else {
    pokemonFilteredByCreator = pokemonList.filter(p => p.id.toString().length < 10)
  }

  return function(dispatch) {
    return dispatch({
      type: FILTER_BY_CREATOR,
      payload: pokemonFilteredByCreator
    })
  }

}
export function filterByOrder(pokemonList, order) {
  let pokemonFilteredByOrder = []
  switch (order) {
    case 'ABC_DESC':
      pokemonFilteredByOrder = pokemonList.sort((function(a, b) {
        return a.name.localeCompare(b.name);
      }))
      break;

    case 'ABC_ASC':
      pokemonFilteredByOrder = pokemonList.sort((function(a, b) {
        return a.name.localeCompare(b.name);
      })).reverse()
      break;
    case 'ATT_ASC':
      pokemonFilteredByOrder = pokemonList.sort((function(a, b) {
        return a.attack - b.attack
      }))
      break;
    case 'ATT_DESC':
      pokemonFilteredByOrder = pokemonList.sort((function(a, b) {
        return a.attack - b.attack
      })).reverse()
      break;
    default:
      pokemonFilteredByOrder = pokemonList;
  }
  return function(dispatch) {
    return dispatch({
      type: FILTER_BY_ORDER,
      payload: pokemonFilteredByOrder
    })
  }

}