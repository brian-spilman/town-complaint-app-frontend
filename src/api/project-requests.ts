
export type Complaint = {
    complaint_id: number,
    description: string,
    status: string,
    meeting_id: number
};

export type ComplaintForm = {
    description: string,
    status: string,
    meeting_id: number
};

export type Meeting = {
    meeting_id: number,
    address: string,
    time: number,
    summary: string
}

export type MeetingForm = {
    address: string,
    time: number,
    summary: string
}

export async function createComplaint(newComplaint: ComplaintForm): Promise<Complaint> {

    const httpResponse = await fetch("http://127.0.0.1:8080/complaints", {
        method:"POST",
        body:JSON.stringify(newComplaint),
        headers: {
            "Content-Type":"application/json"
        }
    });

    const complaint: Complaint = await httpResponse.json();
    return complaint;

}

export async function getAllComplaints(): Promise<Complaint[]>{

    const httpResponse = await fetch("http://127.0.0.1:8080/complaints");
    const complaints: Complaint[] = await httpResponse.json();
    return complaints;

}

export async function getComplaintById(complaintId: number): Promise<Complaint>{

    const httpResponse = await fetch("http://127.0.0.1:8080/complaints/" + complaintId);
    const complaint: Complaint = await httpResponse.json();
    return complaint;
    
}

export async function updateComplaint(complaint: Complaint): Promise<Complaint> {
    const httpResponse = await fetch("http://127.0.0.1:8080/complaints", {
        method:"PUT",
        body:JSON.stringify(complaint),
        headers: {
            "Content-Type":"application/json"
        }
    });

    const newComplaint: Complaint = await httpResponse.json();
    return newComplaint;
}

export async function getAllMeetings(): Promise<Meeting[]>{

    const httpResponse = await fetch("http://127.0.0.1:8080/meetings");
    const meetings: Meeting[] = await httpResponse.json();
    return meetings;

}

export async function getMeetingById(meetingId: number): Promise<Meeting>{

    const httpResponse = await fetch("http://127.0.0.1:8080/meetings/" + meetingId);
    const meeting: Meeting = await httpResponse.json();
    return meeting;
    
}

export async function updateMeeting(meeting: Meeting): Promise<Meeting> {
    const httpResponse = await fetch("http://127.0.0.1:8080/meetings", {
        method:"PUT",
        body:JSON.stringify(meeting),
        headers: {
            "Content-Type":"application/json"
        }
    });

    const newMeeting: Meeting = await httpResponse.json();
    return newMeeting;
}

export async function deleteMeeting(meetingId: number): Promise<boolean>{

    const httpResponse = await fetch("http://127.0.0.1:8080/meetings/" + meetingId, {
        method:"DELETE",
        headers: {
            "Content-Type":"application/json"
        }
    })
    const bool: boolean = await httpResponse.json();
    return bool;
    
}

export async function createMeeting(newMeeting: MeetingForm): Promise<Meeting> {

    const httpResponse = await fetch("http://127.0.0.1:8080/meetings", {
        method:"POST",
        body:JSON.stringify(newMeeting),
        headers: {
            "Content-Type":"application/json"
        }
    });

    const meeting: Meeting = await httpResponse.json();
    return meeting;

}