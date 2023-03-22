import { useEffect, useState } from "react";
import { Complaint, getAllComplaints, getAllMeetings, Meeting } from "../api/project-requests";
import { ComplaintsList } from "../components/complaints-list";
import { MeetingsList } from "../components/meetings-list";
import { NavBar } from "../components/navbar";
import "../styles.css";


export function HomePage() {

    const [complaints, setComplaints] = useState<Complaint[]>([]);
    const [meetings, setMeetings] = useState<Meeting[]>([]);

    useEffect(()=>{
        (async ()=>{
            const complaintsList = await getAllComplaints();
            const meetingsList = await getAllMeetings();
            setComplaints(complaintsList);
            setMeetings(meetingsList);
        })();
    }, [])

    return <>
    
        <NavBar/>
        <h1>Welcome to the Albuquerque, New Mexico Town Meetings Website</h1>
        {localStorage.getItem("role") === "guest" ? <></> : <>
        <h3>Complaints List:</h3>
        <ComplaintsList complaints={complaints} /> </>}
        <h3>Town Meetings:</h3>
        <MeetingsList meetings={meetings} />
    
    </>
}