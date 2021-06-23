import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getPokemon, getTypes, showState } from '../store/actions';
import './landPage.css'

export default function LandPage(){
    const dispatch = useDispatch();
    dispatch(getPokemon());
    dispatch(getTypes());
    dispatch(showState('allPokemons'));
    return (
        <div id='landPage'>
            <Link id='home' to='/home/list'>
                <h1>Henry Pokemon App</h1>
                <h3>By Bobrik</h3>
            </Link>
        </div>
    )

}