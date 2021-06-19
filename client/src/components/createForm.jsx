import {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { createPokemon, getPokemon } from '../store/actions';
export default function CreateForm (){
    const typesReducer = useSelector(state => state.types)
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState();
    const [hp, setHp] = useState();
    const [attack, setAttack] = useState();
    const [defense, setDefense] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [img, setImg] = useState();
    const [types, setTypes] = useState(['','']);
    const [flag, setFlag] = useState(true)
    let body = {
        name, speed, hp, attack, height, weight, img
    }
    
    const displayForm= ()=>{
        const handleSubmit = (e)=>{
            e.preventDefault()
            dispatch(createPokemon(body, types))
            setFlag(false)
        }
        return(
            <div>
            <Link to='/home/list'>
            <button>home</button>
            </Link>
            <h1>Create your own:</h1>
            <form onSubmit={handleSubmit}>
                <label> Name: </label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                <label> Speed: </label>
                <input 
                    type="number" 
                    value={speed}
                    onChange={(e)=> setSpeed(e.target.value)}/>
                <label> Health Points: </label>
                <input 
                    type="number"
                    value={hp}
                    onChange={(e)=> setHp(e.target.value)}/>
                <label> Attack: </label>
                <input 
                    type="number" 
                    value={attack}
                    onChange={(e)=> setAttack(e.target.value)}/>
                <label> Defense: </label>
                <input 
                    type="number" 
                    value={defense}
                    onChange={(e)=> setDefense(e.target.value)}/>
                <label> Height: </label>
                <input 
                    type="number"
                    value={height}
                    onChange={(e)=> setHeight(e.target.value)}/>
                <label> Weight: </label>
                <input 
                    type="number"
                    value={weight}
                    onChange={(e)=> setWeight(e.target.value)}/>
                <label> Image: </label>
                <input 
                    type="text"
                    value={img}
                    onChange={(e)=> setImg(e.target.value)}/>
                <div>
                <label> Types: </label>
                <label>1:</label>
                <select value={types[0]} onChange={(e) => setTypes([e.target.value, types[1]])}>
                    {typesReducer.map(t=>{
                        return <option type="checkbox" value={t.id} key={t.id}>{t.name}</option>
                    })}
                </select>
                <label>2:</label>
                <select value={types[1]} onChange={(e)=> setTypes([types[0], e.target.value])}>
                    {typesReducer.map(t=>{
                        return <option type="checkbox" value={t.id} key={t.id}>{t.name}</option>
                    })}
                </select>
                </div>
                <button>Create</button>
   
            </form>
            
        </div>
        )
    }
    const congrats = ()=>{
        return(
            <div>
                <h3>Pokemon Created Successfuly!</h3>
                <Link to='/home/list'><button onClick={()=>dispatch(getPokemon())}>Home</button></Link>
            </div>
        )
    }
    return(
        <div>
            {flag ? displayForm(): congrats() }
        </div>
    )
}