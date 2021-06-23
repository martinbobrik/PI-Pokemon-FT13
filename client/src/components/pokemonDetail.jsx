import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../store/actions";
import './pokemonDetail.css'

export default function PokemonDetails (){
    const {id} = useParams();
    const dispatch = useDispatch();
    const pokemonId= useSelector(state => state.pokemonId)
    const isLoading= useSelector(state => state.isLoading)
    const nameCapitalized = pokemonId.name?.charAt(0).toUpperCase() + pokemonId.name?.slice(1)
    // document.title = nameCapitalized;
    useEffect(()=>{
        dispatch(getPokemonById(id))
    },[])
    
    function render(){
        return(<div id='detailMain'>
            <div id='title'>
                <h1>{nameCapitalized} Details</h1>
                <h3>(ID: {pokemonId.id})</h3>
            </div>
            <div id='body'>
                <div id='picTypes'>
                    <img src={pokemonId.img} alt="not found" />
                    <ul>Types: {pokemonId.types?.map(t => {return <li key={t.id}>{ t.name}</li>})}</ul>
                </div>
                <ul id='specs'>
                    <li>HP: {pokemonId.hp}</li>
                    <li>Attack: {pokemonId.attack}</li>
                    <li>Defense: {pokemonId.defense}</li>
                    <li>Speed: {pokemonId.speed}</li>
                    <li>Height: {pokemonId.height}</li>
                    <li>Weight: {pokemonId.weight}</li>
                </ul>
            </div>
            </div>)
    }
return(
    <div id='render'>
        {isLoading? <h3>Loading...</h3>: render()}
    </div>
)
}