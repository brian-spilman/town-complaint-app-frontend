import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Complaint, deleteMeeting, getAllComplaints, getMeetingById, Meeting } from "../api/project-requests";
import { ComplaintsList } from "../components/complaints-list";
import { NavBar } from "../components/navbar";
import { convertDate } from "../util/date-util";
import "../styles.css";



export function MeetingDetailsPage() {

    const navigate = useNavigate();
    let { meetingId } = useParams();

    const [complaints, setComplaints] = useState<Complaint[]>([]);
    const [meeting, setMeeting] = useState<Meeting>({
        meeting_id: 0,
        address: "",
        time: 0,
        summary: ""
    });

    useEffect(()=>{
        (async ()=>{
            const complaintsList = await getAllComplaints();
            const meeting = await getMeetingById(Number(meetingId));
            setComplaints(complaintsList.filter(c => c.meeting_id === Number(meetingId)));
            setMeeting(meeting);
        })();
    }, [])

    function editButton() {
        navigate(`/editmeeting/${meeting.meeting_id}`);
    }

    async function deleteButton() {
        const works: boolean = await deleteMeeting(meeting.meeting_id);
        console.log(works);
        navigate("/home");
    }

    return <>
    
        <NavBar/>

        <h3>Summary: {meeting.summary}</h3>
        <h3>Time: {convertDate(meeting.time)}</h3>
        <h3>Address: {meeting.address}</h3>

        {localStorage.getItem("role") === "guest" ? <></> : <>
        <button onClick={editButton}>Edit Meeting Info</button>
        <button onClick={deleteButton}>Delete Meeting</button> </> }

        <h3>Complaints to be dealt with: </h3>
        <ComplaintsList complaints={complaints} />
    
    </>
}
