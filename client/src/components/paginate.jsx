import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showState } from "../store/actions";
import Card from './card';


export default function Paginate(data){
    const pokemonList = data.data
    const dispatch = useDispatch();

    const [pageNumber, setPageNumber] = useState(0);
    const pokemonPerPage= 12;
    const pagesVisited= pageNumber * pokemonPerPage;
    const displayPokemon = pokemonList
    .slice(pagesVisited, pagesVisited + pokemonPerPage)
    .map(p=> {
        return (
            <div key={p.id}>
                <Card data={p}/>
            </div>)
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
            <div>
                <button value={pageNumber - 1} onClick={(e)=>changePage(e)} disabled={pageNumber === 0}>Previous</button>
                {pageButtons()}
                <button value={pageNumber +1} onClick={(e)=>changePage(e)} disabled={pageNumber === pageCount-1}>Next</button>
            </div>
        )
    }

    return(
        <div>
            {displayPokemon}
            {pokemonList.length > 12 ? displayButtons(): null}
        </div>
    )
}