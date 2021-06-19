import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import image from '../img/pokemon.png'
import { getPokemon, getTypes, showState } from '../store/actions';
export default function LandPage(){
    const dispatch = useDispatch();
    dispatch(getPokemon());
    dispatch(getTypes());
    dispatch(showState('allPokemons'));
    return (
        <div>
            <h1>Henry Pokemon App</h1>
            <h3>By Bobrik</h3>
            <Link to='/home/list'>Home</Link>
            <img src={image} alt="not found" />
        </div>
    )

}