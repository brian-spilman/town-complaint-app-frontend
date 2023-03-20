import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMeeting, MeetingForm } from "../api/project-requests";
import { NavBar } from "../components/navbar";


export function CreateMeetingPage() {

    const navigate = useNavigate();

    const [form, setForm] = useState<MeetingForm>({
        address: "",
        time: 0,
        summary: ""
    })

    async function buttonHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newMeeting = await createMeeting(form);
        console.log(newMeeting);
        navigate("/home");
    }

    return <>

        <NavBar/>
        <h3>Complaint Creation Form</h3>

        <form onSubmit={(e: FormEvent<HTMLFormElement>) => buttonHandler(e)}>

            <label htmlFor="summary">Summary:</label>
            <input id="summary" required type="text" placeholder="ex: Town Meeting on infrastructure" onChange={e => setForm({...form, summary: e.target.value})}/>

            <label htmlFor="address">Address:</label>
            <input id="address" required type="text" placeholder="ex: 400 Charles Ave SE" onChange={e => setForm({...form, address: e.target.value})}/>

            <label htmlFor="time">Time:</label>
            <input id="time" required type="datetime-local" onChange={e => setForm({...form, time: Date.parse(e.target.value) / 1000})}/>
        
            <button type="submit">Add Meeting</button>

        </form>
    
    </>

}