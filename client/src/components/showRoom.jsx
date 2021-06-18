import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { showState } from "../store/actions";
import Card from "./card"
import Paginate from './paginate';


export default function ShowRoom(){
    const allPokemons = useSelector((state) => state.allPokemons);
    const pokemonByName = useSelector((state) => state.pokemonByName);
    const show = useSelector(state => state.show);
    const isLoading = useSelector(state => state.isLoading);
    const cache = useSelector(state => state.cache)
    const dispatch = useDispatch();
    
   
    const load = ()=>{
        switch(show){
            case 'allPokemons':
                return(
                    <Paginate data={allPokemons}/>
                    )    
            case 'pokemonByName':
                return(
                    <div>
                        {pokemonByName === 'Error'? <h3>Pokemon not found...</h3>: 
                        <Link to={`/home/details/${pokemonByName.id}`} onClick={()=>dispatch(showState('pokemonId'))}>
                        <Card data={pokemonByName}/>
                        </Link>}
                    </div>

                )
                case 'filtered':
                   return cache.length > 0 ?<Paginate data={cache}/>:<h3>No matches...</h3> 
            default:
                return <h3>Loading...</h3>  
            }
    }
    // useEffect(()=>{
    //     load()
    // },[isLoading])

    return(
        <div>
            {isLoading? <h3>Loading...</h3>: load()}
        </div>
    )
}
    


