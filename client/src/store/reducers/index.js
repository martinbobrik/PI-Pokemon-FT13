import {
  GET_POKEMON,
  GET_POKEMONBYNAME,
  GET_POKEMONBYID,
  SHOW_STATE,
  LOADED,
  GET_TYPES,
  FILTER_BY_TYPE,
  FILTER_BY_CREATOR,
  FILTER_BY_ORDER,
  CREATE_POKEMON
} from '../actions/index';

const initialState = {
  allPokemons: [],
  pokemonId: [],
  pokemonByName: [],
  show: '',
  isLoading: false,
  types: [],
  cache: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        allPokemons: action.payload,
        isLoading: false
      }
    case GET_POKEMONBYNAME:
      return {
        ...state,
        pokemonByName: action.payload,
        isLoading: false
      }
    case GET_POKEMONBYID:
      return {
        ...state,
        pokemonId: action.payload,
        isLoading: false
      }
    case GET_TYPES:
      return {
        ...state,
        types: action.payload
      }
    case SHOW_STATE:
      return {
        ...state,
        show: action.payload,
        isLoading: true
      }
    case LOADED:
      return {
        ...state,
        isLoading: false
      }
    case FILTER_BY_TYPE:
      return {
        ...state,
        cache: action.payload,
        isLoading: false
      }
    case FILTER_BY_CREATOR:
      return {
        ...state,
        cache: action.payload,
        isLoading: false
      }
    case FILTER_BY_ORDER:
      return {
        ...state,
        cache: action.payload,
        isLoading: false
      }
    case CREATE_POKEMON:
      return {
        ...state,
        pokemonId: action.payload
      }
    default:
      return {
        ...state
      };
  }
}

export default reducer;