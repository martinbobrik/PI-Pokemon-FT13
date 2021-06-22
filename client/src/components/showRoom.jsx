import { useSelector } from "react-redux"
import Card from "./card"
import Paginate from './paginate';
import Filters from './filters';


export default function ShowRoom(){
    const allPokemons = useSelector((state) => state.allPokemons);
    const pokemonByName = useSelector((state) => state.pokemonByName);
    const show = useSelector(state => state.show);
    const isLoading = useSelector(state => state.isLoading);
    const cache = useSelector(state => state.cache)    
   
    const load = ()=>{
        switch(show){
            case 'allPokemons':
                return <Paginate data={allPokemons}/>
            case 'pokemonByName':
                return(
                    <div>
                        {pokemonByName === 'Error'? <h3>Pokemon not found...</h3>: 
                        <Card data={pokemonByName}/>
                        }
                    </div>
                )
                case 'filtered':
                   return cache.length > 0 ?<Paginate data={cache}/>:<h3>No matches...</h3> 
            default:
                return <h3>Loading...</h3>  
            }
    }
   

    return(
        <div>
            <Filters/>
            {isLoading? <h3>Loading...</h3>: load()}
        </div>
    )
}
    


