import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPokemonByName,showState, loaded} from '../store/actions/index';

export default function SearchBar(props){
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    let history = useHistory();
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(search === ''){
            return alert('Search input is empty')
        }
        dispatch(getPokemonByName(search))
        dispatch(showState('pokemonByName'))
        history.push('/home/list')
  }
    
    const handleReload= (e)=>{
        e.preventDefault();
        dispatch(showState('allPokemons'))
        dispatch(loaded()); 
        history.push('/home/list')
    }
  
    return(
        <div>
            <form action="submit" onSubmit={(e) =>handleSubmit(e)}>
                <input type="text" placeholder='Type here...' onChange={(e) =>setSearch(e.target.value.toLowerCase())}/>   
                <input type="submit" value="Search" onClick={(e) =>handleSubmit(e)}/>
            </form>
            
            <button onClick={(e) => handleReload(e)}>Reload Pokemon</button>
            
        </div>
    )
}