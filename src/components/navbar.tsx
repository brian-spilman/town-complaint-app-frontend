import { Link } from "react-router-dom";


export function NavBar() {


    return <>
    
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/createcomplaint">Create Complaint</Link></li>
            <li><Link to="/createmeeting">Create Meeting</Link> </li>
        </ul>
    
    </>
}