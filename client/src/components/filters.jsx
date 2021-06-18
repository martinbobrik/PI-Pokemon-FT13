import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { filterByType, showState, filterByCreator, filterByOrder } from "../store/actions";

export default function Filters (){
    const types = useSelector(state => state.types);
    const [type, setType] = useState('');
    const [creator, setCreator] = useState('');
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();
    const history = useHistory();


    const handleTypeChange= (e)=>{
        e.preventDefault();
        setType(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(showState('filtered'))
        dispatch(filterByType(allPokemons, type))
        history.push('/home/list')   
    }
    
    const handleCreatorChange = (e) =>{
        e.preventDefault()
        setCreator(e.target.value)   
    }
    const handleSubmit2= (e) =>{
        e.preventDefault()
        dispatch(showState('filtered'))
        dispatch(filterByCreator(allPokemons, creator))
        history.push('/home/list')  
    }
    const handleSubmit3= (e) =>{
        e.preventDefault()
        dispatch(showState('filtered'))
        dispatch(filterByOrder(allPokemons, e.target.value))
        history.push('/home/list')
    }
    return (
        <div>
            <div>
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Filter by Type</button>
                <select name="Type" onChange={(e)=>handleTypeChange(e)}>
                {types.map(t =>{
                    return <option value={t.name} key={t.id}>{t.name}</option>
                })}
            </select>
                <button type="submit" onClick={(e)=>handleSubmit2(e)}>Filter by Creator</button>
                <select name="Creator" onChange={(e)=>handleCreatorChange(e)}>
                    <option value="api">Pokemon</option>
                    <option value="DB">You</option>
                </select>
            </div>
            <div>
                <button type="submit" value="ABC_DESC" onClick={(e)=>handleSubmit3(e)}> ABC &#x2193;</button>
                <button type="submit" value="ABC_ASC" onClick={(e)=>handleSubmit3(e)}> ABC &#x2191;</button>
                <button type="submit" value="ATT_DESC" onClick={(e)=>handleSubmit3(e)}> Attack &#x2193;</button>
                <button type="submit" value="ATT_ASC" onClick={(e)=>handleSubmit3(e)}> Attack &#x2191;</button>
                {/* <select name="order" onChange={(e)=>handleOrderChange(e)}>
                    <option value='abc'>ABC </option>
                    <option value='attack'>Attack</option>
                </select> */}
            </div>
        </div>
    )
}