import { Link } from "react-router-dom"
import { Complaint } from "../api/project-requests"


type ComplaintsListProps = {
    complaints: Complaint[]
}

export function ComplaintsList(props: ComplaintsListProps) {


    return <>
    
    <ul>
        {props.complaints.map(c => <li key={c.complaint_id}>Description: {c.description}<br/>Status: {c.status}<br/>{localStorage.getItem("role") === "guest" ? <></> : <Link to={`/editcomplaint/${c.complaint_id}`}>Review Complaint</Link>}</li>)}
    </ul>
    </>
}