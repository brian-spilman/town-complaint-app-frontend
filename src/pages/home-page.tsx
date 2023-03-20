import { useEffect, useState } from "react";
import { Complaint, getAllComplaints, getAllMeetings, Meeting } from "../api/project-requests";
import { ComplaintsList } from "../components/complaints-list";
import { MeetingsList } from "../components/meetings-list";
import { NavBar } from "../components/navbar"


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
        <img src="https://media3.giphy.com/media/j5PHGhZMNOMznyhYPT/giphy.gif?cid=6c09b95269a48a139abb5a6a54bc47432e706bc8e35a069e&rid=giphy.gif&ct=g" alt="itysl" />
        <h3>Complaints List:</h3>
        <ComplaintsList complaints={complaints} />
        <h3>Town Meetings:</h3>
        <MeetingsList meetings={meetings} />
    
    </>
}