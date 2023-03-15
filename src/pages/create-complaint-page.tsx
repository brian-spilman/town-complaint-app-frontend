import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ComplaintForm, createComplaint } from "../api/project-requests";
import { NavBar } from "../components/navbar";


export function CreateComplaintPage() {

    const [form, setForm] = useState<ComplaintForm>({
        description: "",
        status: "UNREVIEWED",
        meeting_id: -1
    });

    const navigate = useNavigate();

    async function buttonHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComplaint = await createComplaint(form);
        console.log(newComplaint);
        navigate("/");
    }

    return <>
    
        <NavBar/>
        <h3>Complaint Creation Form</h3>

        <form onSubmit={(e: FormEvent<HTMLFormElement>) => buttonHandler(e)}>

            <label htmlFor="description">Description:</label>
            <input id="description" required type="text" placeholder="ex: we need more town meetings" onChange={e => setForm({...form, description: e.target.value})}/>
        
            <button type="submit">Add Complaint</button>

        </form>
    </>

}