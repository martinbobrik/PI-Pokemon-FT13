import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showState } from "../store/actions";

export default function Card(data){
    const dispatch = useDispatch();

    const poke = data.data;
    return (
        <div>
            <Link to={`/home/details/${poke.id}`} onClick={()=>dispatch(showState('pokemonId'))}>
                <ul key={poke.id}>
                    <li>Name: {poke.name}</li>
                    <li><img src={poke.img} alt="not found" /></li>
                    <li>Types: <ul>
                        {poke.types?.map(t => {return <li key={t.id}>{t.name}</li>})}
                        </ul></li>
                </ul>
            </Link>
        </div>
    )
}