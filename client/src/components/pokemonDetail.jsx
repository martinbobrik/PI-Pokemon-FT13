import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../store/actions";

export default function PokemonDetails (props){
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const pokemons= useSelector(state => state.pokemons)
    const nameCapitalized = pokemons.name?.charAt(0).toUpperCase() + pokemons.name?.slice(1)
    document.title = nameCapitalized;
    useEffect(()=>{
        dispatch(getPokemonById(id))
    },[])
    
return(
    <div>
        <h1>{nameCapitalized} Details</h1>
        <ul>
            {/* <li>Name: {pokemons.name}</li> */}
            <li>HP: {pokemons.hp}</li>
            <li>Attack: {pokemons.attack}</li>
            <li>Defense: {pokemons.defense}</li>
            <li>Speed: {pokemons.speed}</li>
            <li>Height: {pokemons.height}</li>
            <li>Weight: {pokemons.weight}</li>
            <li><img src={pokemons.img} alt="not found" /></li>
            <ul>{pokemons.types?.map(t => {return <li key={t.slot || t.id}>{t.type?.name || t.name}</li>})}</ul>
        </ul>
    </div>
)
}