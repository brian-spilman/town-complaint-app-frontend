import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMeetingById, Meeting, updateMeeting } from "../api/project-requests";
import { NavBar } from "../components/navbar";
import { convertDate } from "../util/date-util";
import "../styles.css";



export function EditMeetingPage() {

    let { meetingId } = useParams();
    const navigate = useNavigate();

    const [oldMeeting, setOldMeeting] = useState<Meeting>({
        meeting_id: 0,
        address: "",
        time: 0,
        summary: ""
    });
    const [newMeeting, setNewMeeting] = useState<Meeting>({
        meeting_id: 0,
        address: "",
        time: 0,
        summary: ""
    });

    useEffect(()=>{
        (async ()=>{
            const meeting = await getMeetingById(Number(meetingId));
            setOldMeeting(meeting);
        })();
    }, []);

    async function submitEdit() {

        let updatedMeeting: Meeting = {
            meeting_id: oldMeeting.meeting_id,
            summary: newMeeting.summary,
            address: newMeeting.address,
            time: newMeeting.time
        }

        if(updatedMeeting.summary === "") {
            updatedMeeting.summary = oldMeeting.summary;
        }
        if(updatedMeeting.address === "") {
            updatedMeeting.address = oldMeeting.address;
        }
        if(updatedMeeting.time === 0) {
            updatedMeeting.time = oldMeeting.time;
        } 

        const returnedMeeting = await updateMeeting(updatedMeeting);
        console.log(returnedMeeting);

        navigate("/home");

    }

    return <>

        <NavBar/>

        <h2>Editing Meeting:</h2>
        <h3>Summary: {oldMeeting.summary}</h3>
        <h3>Address: {oldMeeting.address}</h3>
        <h3>Time: {convertDate(oldMeeting.time)}</h3>

        <label htmlFor="summary">New Summary:</label>
        <input id="summary" type="text" placeholder="ex: Town Meeting on infrastructure" onChange={e => setNewMeeting({...newMeeting, summary: e.target.value})}/>

        <label htmlFor="address">New Address:</label>
        <input id="address" type="text" placeholder="ex: 400 Charles Ave SE" onChange={e => setNewMeeting({...newMeeting, address: e.target.value})}/>

        <label htmlFor="time">New Time:</label>
        <input id="time" type="datetime-local" onChange={e => setNewMeeting({...newMeeting, time: Date.parse(e.target.value) / 1000})}/>
    
        <button onClick={submitEdit}>Done Editing</button>
        
    
    </>

}