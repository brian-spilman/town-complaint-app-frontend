import { Link, useNavigate } from "react-router-dom";


export function NavBar() {

    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate("/");
    }

    return <>
    
        {localStorage.getItem("role") === "guest" ? <h4>Welcome, guest</h4> : <h4>Welcome, Council Member {localStorage.getItem("username")}</h4>}

        <ul>
            
            <li><Link to="/home">Home</Link></li>
            {localStorage.getItem("role") === "guest" ? <li><Link to="/createcomplaint">Create Complaint</Link></li> : <></>}
            {localStorage.getItem("role") === "guest" ? <></>: <li><Link to="/createmeeting">Create Meeting</Link> </li>}
            <button onClick={logout}>Logout</button>
        </ul>
    
    </>
}