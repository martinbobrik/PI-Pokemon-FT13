import SearchBar from './searchBar'
import {Link, useHistory} from 'react-router-dom'
import './navBar.css'
import { useDispatch } from 'react-redux';
import {showState, loaded, getPokemon, getTypes} from '../store/actions/index';
export default function NavBar(){
    const history = useHistory();
    const dispatch = useDispatch();
    const handleReload= (e)=>{
        e.preventDefault();
        dispatch(getPokemon())
        dispatch(getTypes())
        dispatch(showState('allPokemons'))
        dispatch(loaded()); 
        history.push('/home/list')
    }
    return (
        <div className='navBar'>
            <ul id='navbarUl'>
                <li>
                    <button className='navBarBttn'onClick={history.goBack}>Back</button>
                </li>
                <li>
                    <button className='navBarBttn' onClick={(e) => handleReload(e)}>Reload Pokemon</button>
                </li>
                <li>
                    <Link to='/home/create'><button className='navBarBttn'>Create Pokemon</button></Link>
                </li>
                {/* <li className='searchBar'> */}
                {/* </li> */}
            </ul>
                    <div className='searchBar'>
                        <SearchBar />
                    </div>
        </div>
    )
}