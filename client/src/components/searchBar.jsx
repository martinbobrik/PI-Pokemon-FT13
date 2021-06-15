import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {getPokemon, getPokemonByName} from '../store/actions/index';
import PokemonDetails from './pokemonDetail';
import ShowRoom from './showRoom';

export default function SearchBar(){
    const [search, setSearch] = useState('');
    // const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch();
    // let history = useHistory();
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(getPokemonByName(search)) 
  }
    
    const handleReload= (e)=>{
        e.preventDefault();
        dispatch(getPokemon());
        // history.push('/home/list')
    }
    // useEffect(()=>{
    //     dispatch(getPokemon());
    // },[dispatch])
  

    return(
        <div>
            <h1>soy searchBar</h1>
            <form action="submit" onSubmit={(e) =>handleSubmit(e)}>
                <input type="text" onChange={(e) =>setSearch(e.target.value)}/>   
                <input type="submit" value="Search" onClick={(e) =>handleSubmit(e)}/>
            </form>
            
            <button onClick={(e) => handleReload(e)}><Link to='/home/list'>Reload Pokemon</Link></button>
            
        </div>
    )
}