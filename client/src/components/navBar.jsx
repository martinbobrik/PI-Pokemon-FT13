import SearchBar from './searchBar'
import {Link} from 'react-router-dom'
import Filters from './filters'

export default function NavBar(){
    return (
        <div>
            <SearchBar/>
            <Link to='/create'><button>Create Pokemon</button></Link>
            <Filters/>
        </div>
    )
}