import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Card from "./card"
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import PokemonDetails from "./pokemonDetail";

export default function ShowRoom(){
    // const allPokemons = useSelector((state) => state.allPokemons);
    const pokemons = useSelector((state) => state.pokemons);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(()=>{
    },[pokemons])
    
    const load = ()=>{
        if(pokemons.length > 1){
            const pokemonPerPage= 12;
            const pagesVisited= pageNumber * pokemonPerPage;
            const displayPokemon = pokemons
            .slice(pagesVisited, pagesVisited + pokemonPerPage)
            .map(p=> {
                return (
                    <div key={p.id}>
                        <Link to={`/home/detail/${p.id}`}>
                        <Card data={p}/>
                        </Link>
                    </div>)
            })
            const pageCount = Math.ceil(pokemons.length / pokemonPerPage);
            
        
            const changePage= ({selected}) =>{
                setPageNumber(selected);
            }
        
            return(
                <div>
                    {displayPokemon}
                    <ReactPaginate
                        previosLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationButtons'}
                        previousLinkClassName={'previousButton'}
                        nextLinkClassName={'nextButton'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                </div>
            )
        }else{
            console.log('entre al else')
            console.log('pokemons ', pokemons)
            return (
                <div key={pokemons.id}>
                    <Link to={`/home/detail/${pokemons.id}`}>
                    <Card data={pokemons}/>
                    </Link>
                </div>)
    
        }
    }
    return(
        <div>
            {load()}
        </div>
    )
}
    