import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandPage from './components/landPage/landPage';
import PokemonDetails from './components/pokemonDetail/pokemonDetail';
import NavBar from './components/navBar/navBar';
import ShowRoom from './components/showRoom/showRoom';
// import { useDispatch } from 'react-redux';
// import { getPokemon, getTypes, showState} from './store/actions';
import CreateForm from './components/createForm/createForm';

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={LandPage}/>
        <Route path='/home' component={NavBar}/>
        <Route path='/home/list' component={ShowRoom}/>
        <Route path='/home/details/:id' component={PokemonDetails}/>
        <Route path='/home/create' component={CreateForm}/>
      </div>
    </Router>
  );
}

export default App;
