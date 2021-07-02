import { useEffect, useState } from "react";
import Card from '../card/card';
import './paginate.css'

export default function Paginate(data){
    const pokemonList = data.data

    const [pageNumber, setPageNumber] = useState(0);
    const pokemonPerPage= 12;
    const pagesVisited= pageNumber * pokemonPerPage;
    const displayPokemon = pokemonList
    .slice(pagesVisited, pagesVisited + pokemonPerPage)
    .map(p=> {
        return (
                <Card data={p}/>
            )
        })

    useEffect(()=>{
        setPageNumber(0)
    },[data])

    const pageCount = Math.ceil(pokemonList.length / pokemonPerPage);
    const changePage= (e) =>{
        setPageNumber(Number(e.target.value));
        window.scrollTo(0, 0)
    }
    function pageButtons(){
        let buttons = []
        for(let i = 0; i < pageCount; i++){
        buttons.push(<button key={i} value={i} onClick={(e) => changePage(e)} disabled={pageNumber === i}>{i+1}</button>)
        }
        return buttons;
    }
    function displayButtons(){
        return(
            <div >
                <button value={pageNumber - 1} onClick={(e)=>changePage(e)} disabled={pageNumber === 0}>Previous</button>
                {pageButtons()}
                <button value={pageNumber +1} onClick={(e)=>changePage(e)} disabled={pageNumber === pageCount-1}>Next</button>
            </div>
        )
    }

    return(
        <div>
        <div id='main'>
            {displayPokemon}
        </div>
        <div id='pagination'>
            {pokemonList.length > 12 ? displayButtons(): null}
        </div>

        </div>
    )
}