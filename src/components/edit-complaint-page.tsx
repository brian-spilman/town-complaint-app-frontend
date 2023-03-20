import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Complaint, getAllMeetings, getComplaintById, Meeting, updateComplaint } from "../api/project-requests";
import { NavBar } from "./navbar";


export function EditComplaintPage() {

    let { complaintId } = useParams();
    const navigate = useNavigate();

    const [meetings, setMeetings] = useState<Meeting[]>([]);
    
    const [oldComplaint, setOldComplaint] = useState<Complaint>({
        complaint_id: 0,
        description: "",
        status: "",
        meeting_id: 0
    });
    const [newComplaint, setNewComplaint] = useState<Complaint>({
        complaint_id: 0,
        description: "",
        status: "",
        meeting_id: 0
    })

    useEffect(()=>{
        (async ()=>{
            const complaint = await getComplaintById(Number(complaintId));
            const meetingsList = await getAllMeetings();
            setOldComplaint(complaint);
            setMeetings(meetingsList);
        })();
    }, []);

    async function submitEdit() {
        let updatedComplaint: Complaint = {
            complaint_id: oldComplaint.complaint_id,
            description: newComplaint.description,
            status: newComplaint.status,
            meeting_id: newComplaint.meeting_id
        }

        if(updatedComplaint.description === "") {
            updatedComplaint.description = oldComplaint.description;
        }
        if(updatedComplaint.status === "") {
            updatedComplaint.status = oldComplaint.status;
        }
        if(updatedComplaint.meeting_id === 0) {
            updatedComplaint.meeting_id = oldComplaint.meeting_id;
        }

        const returnedComplaint = await updateComplaint(updatedComplaint);
        console.log(returnedComplaint);

        navigate("/home");

    }


    return <>
    
        <NavBar/>
        <h2>Review Complaint: </h2>
        <h3>Description: {oldComplaint.description}</h3>
        <h3>Status: {oldComplaint.status}</h3>
        {meetings.filter(m => m.meeting_id === oldComplaint.meeting_id).map(m => <h3 key={m.meeting_id}>Associated Meeting: {m.summary}</h3>)}
    
        <label htmlFor="selectList">New Status:</label>
        <select name="selectList" id="selectList" onChange={e => setNewComplaint({...newComplaint, status: e.target.value})}>
            <option value=""> </option>
            <option value="UNREVIEWED">UNREVIEWED</option>
            <option value="IGNORED">IGNORED</option>
            <option value="HIGH PRIORITY">HIGH PRIORITY</option>
            <option value="LOW PRIORITY">LOW PRIORITY</option>
            <option value="ADDRESSED">ADDRESSED</option>
        </select>
        <br/>
        <label htmlFor="meetingList">Associate Complaint with Meeting:</label>
        <select name="meetingList" id="meetingList" onChange={e => setNewComplaint({...newComplaint, meeting_id: Number(e.target.value)})}>
            <option value="0"> </option>
            <option value="-1">No Meeting</option>
            {meetings.map(m => <option key={m.meeting_id} value={m.meeting_id}>{m.summary}</option>)}
        </select>
        <br/>
        <button onClick={submitEdit} >Done Reviewing</button>

    </>
}