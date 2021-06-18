import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../store/actions";

export default function PokemonDetails (){
    const {id} = useParams();
    const dispatch = useDispatch();
    const pokemonId= useSelector(state => state.pokemonId)
    const isLoading= useSelector(state => state.isLoading)
    const nameCapitalized = pokemonId.name?.charAt(0).toUpperCase() + pokemonId.name?.slice(1)
    document.title = nameCapitalized;
    useEffect(()=>{
        dispatch(getPokemonById(id))
    },[])
    
    function render(){
        return(<div>
            <h1>{nameCapitalized} Details</h1>
            <h3>(ID: {pokemonId.id})</h3>
            <ul>
                <li>HP: {pokemonId.hp}</li>
                <li>Attack: {pokemonId.attack}</li>
                <li>Defense: {pokemonId.defense}</li>
                <li>Speed: {pokemonId.speed}</li>
                <li>Height: {pokemonId.height}</li>
                <li>Weight: {pokemonId.weight}</li>
                <li><img src={pokemonId.img} alt="not found" /></li>
                <ul>Types: {pokemonId.types?.map(t => {return <li key={t.slot || t.id}>{t.type?.name || t.name}</li>})}</ul>
            </ul>
            </div>)
    }
return(
    <div>
        {isLoading? <h3>Loading...</h3>: render()}
    </div>
)
}