import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandPage from './components/landPage';
import PokemonDetails from './components/pokemonDetail';
import NavBar from './components/navBar';
import ShowRoom from './components/showRoom';
import { useDispatch } from 'react-redux';
import { getPokemon, getTypes, showState} from './store/actions';
import CreateForm from './components/createForm';

function App() {
const dispatch = useDispatch();
dispatch(getPokemon());
dispatch(getTypes());
dispatch(showState('allPokemons'));

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={LandPage}/>
        <Route path='/home' component={NavBar}/>
        <Route path='/home/list' component={ShowRoom}/>
        <Route path='/home/details/:id' component={PokemonDetails}/>
        <Route path='/create' component={CreateForm}/>
      </div>
    </Router>
  );
}

export default App;
