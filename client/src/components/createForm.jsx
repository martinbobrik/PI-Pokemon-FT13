import {Link} from 'react-router-dom'
export default function CreateForm (){
    return(
        <div>
            <h1>soy form</h1>
            <Link to='/home/list'>
            <button>home</button>
            </Link>
            <input type="submit" />
            
        </div>
    )
}