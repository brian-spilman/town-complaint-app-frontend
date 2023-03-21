import { useNavigate } from "react-router-dom";
import "../styles.css";

export function StartPage() {

    const navigate = useNavigate();

    function guestHandler() {
        localStorage.clear();
        localStorage.setItem("role", "guest");
        navigate("/home");
    }

    function loginHandler() {
        navigate("/login");
    }

    return <>
    
        <h2>Welcome to the Albuquerque, New Mexico Town Meetings Website</h2>

        <button onClick={loginHandler}>Login (if council member)</button>
        <button onClick={guestHandler}>Continue as Guest</button>
    
    </>
}