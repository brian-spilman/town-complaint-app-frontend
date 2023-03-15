import { Link } from "react-router-dom"
import { Meeting } from "../api/project-requests"
import { convertDate } from "../util/date-util"

type MeetingsListProps = {
    meetings: Meeting[]
}

export function MeetingsList(props: MeetingsListProps) {

    return <>

        <ul>

            {props.meetings.map(m => <> <li key={m.meeting_id} >ID: {m.meeting_id}<br/>Meeting: <Link to={`/meetingdetails/${m.meeting_id}`} >{m.summary}</Link><br/>Address: {m.address}<br/>Time: {convertDate(m.time)}</li> </>)}
    
        </ul>

    </>

}