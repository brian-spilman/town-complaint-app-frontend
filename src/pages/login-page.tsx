import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/project-requests";
import "../styles.css";


export type SignInForm = {
    username: string,
    password: string
}

export function LoginPage() {

    const navigate = useNavigate();

    const [form, setForm] = useState<SignInForm>({ username: "", password: "" });

    function guestHandler() {
        localStorage.clear();
        localStorage.setItem("role", "guest");
        navigate("/home");
    }

    async function signInHandler() {
        const appUser = await loginUser({username: form.username, password: form.password});
        if(!("error" in appUser)) {
            localStorage.setItem("username", appUser.username);
            localStorage.setItem("userId", appUser.user_id.toString());
            localStorage.setItem("role", "council");
            navigate("/home");
        }else {
            alert("Incorrect Username/Password");
            console.log("ALERT BLOCK");
            // window.alert("Incorrect Sign-In.\nPassword is Incorrect");
        }
    }

    return <>

        <h3>Login Page:</h3>

        <label htmlFor="username">Username: </label>
        <input id="username" type="text" placeholder="exampleusername123" onChange={e => setForm({...form, username: e.target.value})} />

        <label htmlFor="password">Password: </label>
        <input id="password" type="text" placeholder="******" onChange={e => setForm({...form, password: e.target.value})}/>

        <button onClick={signInHandler}>Sign In</button>
    
        <button onClick={guestHandler}>Continue as Guest</button>
    
    </>
}