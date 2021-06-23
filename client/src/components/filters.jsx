import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { filterByType, showState, filterByCreator, filterByOrder } from "../store/actions";
import './filters.css'

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
    const handleSubmitCreator= (e) =>{
        e.preventDefault()
        dispatch(showState('filtered'))
        dispatch(filterByCreator(allPokemons, creator))
        history.push('/home/list')  
    }
    const handleSubmitOrder= (e) =>{
        e.preventDefault()
        dispatch(showState('filtered'))
        dispatch(filterByOrder(allPokemons, e.target.value))
        history.push('/home/list')
    }
    return (
        <div id='filtersDiv'>
            <div id='firstFilter'>
                <button className='filterBttn' type="submit" onClick={(e)=>handleSubmit(e)}>Filter by Type</button>
                <select name="Type" onChange={(e)=>handleTypeChange(e)}>
                {types.map(t =>{
                    return <option value={t.name} key={t.id}>{t.name}</option>
                })}
            </select>
                <button className='filterBttn' type="submit" onClick={(e)=>handleSubmitCreator(e)}>Filter by Creator</button>
                <select name="Creator" onChange={(e)=>handleCreatorChange(e)}>
                    <option value="api">Pokemon</option>
                    <option value="DB">You</option>
                </select>
            </div>
            <div id='secondFilter'>
                <button className='filterBttn' type="submit" value="ABC_DESC" onClick={(e)=>handleSubmitOrder(e)}> ABC &#x2193;</button>
                <button className='filterBttn' type="submit" value="ABC_ASC" onClick={(e)=>handleSubmitOrder(e)}> ABC &#x2191;</button>
                <button className='filterBttn' type="submit" value="ATT_DESC" onClick={(e)=>handleSubmitOrder(e)}> Attack &#x2193;</button>
                <button className='filterBttn' type="submit" value="ATT_ASC" onClick={(e)=>handleSubmitOrder(e)}> Attack &#x2191;</button>
            </div>
        </div>
    )
}