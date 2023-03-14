
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