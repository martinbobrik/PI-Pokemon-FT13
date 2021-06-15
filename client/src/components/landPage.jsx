import { Link } from 'react-router-dom'
import image from '../img/pokemon.png'
export default function LandPage(){
    // const image = "../img/pokemon.png";
    return (
        <div>
            <h1>Henry Pokemon App</h1>
            <h3>By Bobrik</h3>
            <Link to='/home/list'>Home</Link>
            <img src={image} alt="not found" />
        </div>
    )

}