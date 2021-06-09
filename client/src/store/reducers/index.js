import { GET_POKEMON, GET_POKEMONBYNAME, GET_POKEMONBYID } from '../actions/pokemonActions';

const initialState = {
  pokemons: [],
  types: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload
      }
    case GET_POKEMONBYNAME:
      return {
        ...state,
        pokemons: action.payload
      }
    case GET_POKEMONBYID:
      return {
        ...state,
        pokemons: action.payload
      }
    default:
      return {
        ...state
      };
  }
}

export default reducer;