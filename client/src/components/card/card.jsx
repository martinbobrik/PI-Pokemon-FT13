import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showState } from "../../store/actions";
import './card.css'

export default function Card(data){
    const dispatch = useDispatch();

    const poke = data.data;
    const nameCapitalized = poke.name?.charAt(0).toUpperCase() + poke.name?.slice(1)
    return (
        <div id='card'>
            <Link id='link'to={`/home/details/${poke.id}`} onClick={()=>dispatch(showState('pokemonId'))}>
                <ul key={poke.id} id='cardUl'>
                    <li id='name'>{nameCapitalized}</li>
                    <li id='img'><img src={poke.img} alt="not found" /></li>
                    <li id='types'>Types: <ul>
                        {poke.types?.map(t => {return <li key={t.id}>{t.name}</li>})}
                        </ul></li>
                </ul>
            </Link>
        </div>
    )
}