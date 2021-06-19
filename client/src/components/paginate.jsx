import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showState } from "../store/actions";
import Card from './card';


export default function Paginate(data){//TODO que vuelva a la página 1 cuando vuelve a cargar un filtro
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
                <Link to={`/home/details/${p.id}`} onClick={()=>dispatch(showState('pokemonId'))}>
                <Card data={p}/>
                </Link>
            </div>)
        })

    useEffect(()=>{
        setPageNumber(0)
    },[data])

    const pageCount = Math.ceil(pokemonList.length / pokemonPerPage);
    const changePage= (e) =>{
        setPageNumber(Number(e.target.value));
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




    



// const [posts, setPosts] = useState([]);
// const [loading, setLoading] = useState(false);
// const [currentPage, setCurrentPage] = useState(1);
// const [postsPerPage, setPostsPerPage] = useState(10);

// useEffect(()=>{
//     const fetchPosts = async () =>{
//         setLoading(true);
//         const res = await axios.get('')
//         setPosts(res.data);
//         setLoading(false)
//     }
//     fetchPosts();
// }),[];

// //get current posts
// const indexOfLastPost = currentPage* postsPerPage;
// const indexOfFirstPost = indexOfLastPost - postsPerPage;
// const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// return(
//     <div>
//         <h1>algo</h1>
//     </div>
// )