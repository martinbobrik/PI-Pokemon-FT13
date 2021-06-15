import './App.css';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import SearchBar from './components/searchBar.jsx';
import LandPage from './components/landPage';
import PokemonDetails from './components/pokemonDetail';
import NavBar from './components/navBar';
import ShowRoom from './components/showRoom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './store/actions';
import { useEffect } from 'react';

function App() {
const pokemons = useSelector(state => state.pokemons);
const dispatch = useDispatch();
const history = useHistory();

useEffect(() =>{
  dispatch(getPokemon());
  console.log('hola soy app')
  console.log(pokemons)
},[])

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={LandPage}/>
        <Route path='/home' component={NavBar}/>
        <Route path='/home' component={SearchBar}/>
        <Route path='/home/list' component={ShowRoom}/>
        <Route path='/home/detail/:id' component={PokemonDetails}/>
      </div>
    </Router>
  );
}

export default App;
