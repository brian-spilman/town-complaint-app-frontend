import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Complaint, getComplaintById, updateComplaint } from "../api/project-requests";
import { NavBar } from "./navbar";


export function EditComplaintPage() {

    let { complaintId } = useParams();
    const navigate = useNavigate();
    
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
            setOldComplaint(complaint);
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

        navigate("/");

    }


    return <>
    
        <NavBar/>
        <h2>Editing Complaint: </h2>
        <h3>Description: {oldComplaint.description}</h3>
        <h3>Status: {oldComplaint.status}</h3>
        <h3>Meeting ID: {oldComplaint.meeting_id}</h3>
    
        <label htmlFor="description">New Description:</label>
        <input id="description" type="text" placeholder="ex: we need more town meetings" onChange={e => setNewComplaint({...newComplaint, description: e.target.value})}/>

        <label htmlFor="status">New Status:</label>
        <input id="status" type="text" placeholder="ex: UNREVIEWED" onChange={e => setNewComplaint({...newComplaint, status: e.target.value})}/>

        <label htmlFor="meeting_id">New Meeting ID:</label>
        <input id="meeting_id" type="number" placeholder="ex: 5" onChange={e => setNewComplaint({...newComplaint, meeting_id: Number(e.target.value)})}/>

        <button onClick={submitEdit} >Done Editing</button>

    </>
}