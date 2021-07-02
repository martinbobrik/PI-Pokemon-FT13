import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPokemonByName,showState} from '../../store/actions';
import './searchBar.css'

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
        setSearch('');
        history.push('/home/list')
    }
    
    return(
        <div>
            <form action="submit" onSubmit={(e) =>handleSubmit(e)}>
                <input id='input' type="text" placeholder='Type here...' onChange={(e) =>setSearch(e.target.value.toLowerCase())} value={search}/>   
                <input id='submit' type="submit" value="Search" onClick={(e) =>handleSubmit(e)}/>
            </form>
        </div>
    )
}